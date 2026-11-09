import assert from 'node:assert/strict';
import { test } from 'node:test';
import { formatAuthors, mergePublications, normalizeTitle } from '../src/lib/publications.ts';

test('authors are formatted APA-style with initials and a final ampersand', () => {
  assert.equal(
    formatAuthors([
      { given: 'José David', family: 'López' },
      { given: 'Jean-Luc', family: 'Picard' },
      { given: 'Alberto', family: 'Mariola' },
    ]),
    'López, J. D., Picard, J.-L., & Mariola, A.',
  );
  assert.equal(formatAuthors([{ given: 'Alberto', family: 'Mariola' }]), 'Mariola, A.');
});

test('titles match across sources despite dashes, case and markup', () => {
  assert.equal(normalizeTitle('Linking brain–heart <i>interactions</i>'), normalizeTitle('linking Brain-Heart interactions'));
});

test('curated entries win over fetched duplicates and the result is newest first', () => {
  const curated = [
    { title: 'Linking brain–heart interactions', authors: '', journal: 'Psychophysiology', time: '2024', pdf: 'pdf/a.pdf' },
    { title: 'Old paper', authors: '', journal: 'J', time: '2018', doi: '10.1/OLD' },
  ];
  const fetched = [
    { title: 'Linking brain-heart interactions', authors: '', journal: 'bioRxiv', time: '2024' },
    { title: 'Old paper (renamed)', authors: '', journal: 'J', time: '2018', doi: '10.1/old' },
    { title: 'New paper', authors: '', journal: 'Imaging Neuroscience', time: '2026' },
  ];
  const merged = mergePublications(curated, fetched);
  assert.deepEqual(merged.map((p) => p.title), ['New paper', 'Linking brain–heart interactions', 'Old paper']);
  assert.equal(merged[1].pdf, 'pdf/a.pdf');
});

test('a title with an added prefix is treated as the same work', () => {
  const curated = [{ title: 'An integrated virtual reality platform for naturalistic neuroimaging', authors: '', journal: 'bioRxiv', time: '2026' }];
  const fetched = [
    { title: 'MEGgles: An integrated virtual reality platform for naturalistic neuroimaging', authors: '', journal: 'JoCN Forum', time: '2026' },
    { title: 'Neuroimaging', authors: '', journal: 'J', time: '2026' },
  ];
  assert.deepEqual(mergePublications(curated, fetched).map((p) => p.journal), ['bioRxiv', 'J']);
});
