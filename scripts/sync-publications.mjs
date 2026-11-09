// Fetch publications from ORCID (list of works) and Crossref (authors, venue details)
// and write them to src/data/publications.orcid.json. Curated entries in src/data/cv.ts
// take priority over these; see mergePublications in src/lib/publications.ts.
//
// Usage: npm run sync:pubs
// If ORCID cannot be reached the existing JSON file is left untouched.

import { writeFile } from 'node:fs/promises';
import { ORCID_CATEGORY, formatAuthors } from '../src/lib/publications.ts';

const ORCID_ID = '0000-0003-4660-1306';
const OUTPUT = new URL('../src/data/publications.orcid.json', import.meta.url);
const USER_AGENT = 'langestroop-website-sync/1.0 (+https://github.com/langestroop/langestroop-astrowebsite)';

async function getJson(url, headers = {}) {
	const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT, ...headers } });
	if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
	return response.json();
}

const stripTags = (text) => text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

async function crossref(doi) {
	try {
		const { message } = await getJson(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
		return message;
	} catch (error) {
		console.warn(`  Crossref lookup failed for ${doi}: ${error.message}`);
		return undefined;
	}
}

function venue(summary, meta, category) {
	const container = meta?.['container-title']?.[0] ?? summary['journal-title']?.value ?? '';
	if (!container && category === 'Preprints') {
		return meta?.institution?.[0]?.name ?? meta?.publisher ?? 'Preprint';
	}
	const details = [meta?.volume && (meta.issue ? `${meta.volume}(${meta.issue})` : meta.volume), meta?.['article-number'] ?? meta?.page]
		.filter(Boolean)
		.join(', ');
	return [container, details].filter(Boolean).join(', ');
}

const { group } = await getJson(`https://pub.orcid.org/v3.0/${ORCID_ID}/works`, { Accept: 'application/json' });

const works = [];
for (const { 'work-summary': summaries } of group) {
	const summary = summaries[0]; // ORCID lists the preferred version first
	const category = ORCID_CATEGORY[summary.type];
	const year = summary['publication-date']?.year?.value;
	if (!category || !year) continue;

	const doi = summary['external-ids']?.['external-id']?.find((id) => id['external-id-type'] === 'doi')?.['external-id-value'];
	const meta = doi ? await crossref(doi) : undefined;
	const title = stripTags(meta?.title?.[0] ?? summary.title.title.value);
	console.log(`- ${year} ${title}`);

	works.push({
		title,
		authors: meta?.author ? formatAuthors(meta.author) : '',
		journal: venue(summary, meta, category),
		time: year,
		category,
		...(doi && { doi, link: `https://doi.org/${doi}` }),
		...(!doi && summary.url?.value && { link: summary.url.value }),
	});
}

await writeFile(OUTPUT, `${JSON.stringify(works, null, '\t')}\n`);
console.log(`Wrote ${works.length} works to src/data/publications.orcid.json`);
