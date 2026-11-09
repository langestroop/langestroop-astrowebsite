import type { Publication, PublicationCategory } from '../types/cv';

/** Lower-cased, punctuation-free title used to match the same work across sources. */
export function normalizeTitle(title: string): string {
	return title
		.normalize('NFKD')
		.replace(/[̀-ͯ]/g, '')
		.toLowerCase()
		.replace(/<[^>]+>/g, '')
		.replace(/[^a-z0-9]+/g, ' ')
		.trim();
}

export function normalizeDoi(doi?: string): string {
	return (doi ?? '').trim().toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//, '');
}

function initials(given: string): string {
	return given
		.split(/\s+/)
		.filter(Boolean)
		.map((part) =>
			part
				.split('-')
				.map((piece) => (piece.endsWith('.') && piece.length <= 3 ? piece : `${piece[0]}.`))
				.join('-'),
		)
		.join(' ');
}

/** APA-style author list: "Family, G. N., Family, G., & Family, G." */
export function formatAuthors(authors: { family?: string; given?: string; name?: string }[]): string {
	const names = authors
		.map((a) => (a.family ? (a.given ? `${a.family}, ${initials(a.given)}` : a.family) : (a.name ?? '')))
		.filter(Boolean);
	if (names.length <= 1) return names.join('');
	return `${names.slice(0, -1).join(', ')}, & ${names[names.length - 1]}`;
}

export const ORCID_CATEGORY: Record<string, PublicationCategory> = {
	'journal-article': 'Journal Publications',
	preprint: 'Preprints',
	'book-chapter': 'Book Chapters',
	'conference-paper': 'Conference Publications',
	'dissertation-thesis': 'Theses',
};

function sameWork(a: Publication, b: Publication): boolean {
	const doiA = normalizeDoi(a.doi);
	if (doiA && doiA === normalizeDoi(b.doi)) return true;
	const titleA = normalizeTitle(a.title);
	const titleB = normalizeTitle(b.title);
	return titleA.length > 0 && titleA === titleB;
}

/**
 * Curated entries always win; works fetched from ORCID are added only when no curated
 * entry describes the same work (same DOI or same title). Result is newest first.
 */
export function mergePublications(curated: Publication[], fetched: Publication[]): Publication[] {
	const extra = fetched.filter((work) => !curated.some((entry) => sameWork(entry, work)));
	return [...curated, ...extra]
		.map((paper, order) => ({ paper, order }))
		.sort((a, b) => Number(b.paper.time) - Number(a.paper.time) || a.order - b.order)
		.map(({ paper }) => paper);
}
