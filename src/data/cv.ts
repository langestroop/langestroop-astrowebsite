import type { Award, Education, Experience, Publication, Skill } from '@/types/cv';
import { mergePublications } from '@/lib/publications';
import orcidPublications from './publications.orcid.json';

// Entries are displayed in the order they appear here (most recent first).

export const experiences: Experience[] = [
	{
		company: 'OP-MEG Group, Department of Imaging Neuroscience, University College London',
		time: 'April 2024 - Present',
		title: 'OPM Research Fellow',
		location: 'London, UK',
		description: 'Principal Investigator: Prof. Gareth Barnes',
	},
	{
		company: 'Episodic Memory Group, School of Psychology, University of Sussex',
		time: 'April 2023 - April 2024',
		title: 'Postdoctoral Research Fellow',
		location: 'Brighton, UK',
		description: 'Principal Investigator: Prof. Chris Bird',
	},
];

export const researchExperience: Experience[] = [
	{
		company: 'School of Informatics, University of Sussex',
		time: 'April 2018 - July 2018',
		title: 'PhD Rotation',
		location: 'Brighton, UK',
		description:
			'Assessing the presence of Long-Range Temporal Correlations in patients with Disorders of Consciousness: an EEG study. Supervisor: Prof. Luc Berthouze.',
	},
	{
		company: 'Brighton and Sussex Medical School, University of Sussex',
		time: 'January 2018 - April 2018',
		title: 'PhD Rotation',
		location: 'Brighton, UK',
		description:
			'Investigating the relationship between heartbeat-evoked potentials, interoceptive awareness and dissociative symptoms. Supervisors: Prof. Hugo Critchley; Prof. Sarah Garfinkel.',
	},
	{
		company: 'Sussex Centre for Consciousness Science, University of Sussex',
		time: 'September 2017 - December 2017',
		title: 'PhD Rotation',
		location: 'Brighton, UK',
		description:
			'Assessing the neurophysiological correlates of body ownership by combining virtual reality and EEG. Supervisors: Prof. Anil Seth; Dr. Keisuke Suzuki.',
	},
	{
		company: 'MindBrainBody Institute, Berlin School of Mind and Brain',
		time: 'April 2017 - September 2017',
		title: 'MSc Thesis',
		location: 'Berlin, Germany',
		description:
			'Neurophysiophenomenology: linking neurophysiology and subjective experience using virtual reality. Supervisors: Prof. Dr. Arno Villringer; Dr. Michael Gaebler.',
	},
	{
		company: 'MindBrainBody Institute, Berlin School of Mind and Brain',
		time: 'December 2016 - April 2017',
		title: 'MSc Internship',
		location: 'Berlin, Germany',
		description:
			'Assessing the quality of the physiological measurements of an Open Brain Computer Interface system (OpenBCI): an EEG investigation. Supervisors: Prof. Dr. Arno Villringer; Dr. Michael Gaebler.',
	},
	{
		company: 'Visual Cognition Lab, Berlin School of Mind and Brain',
		time: 'January 2016 - June 2016',
		title: 'MSc Internship',
		location: 'Berlin, Germany',
		description:
			'The influence of spontaneous neural oscillations on visual perception. Supervisors: Prof. Dr. Niko Busch; Dr. Luca Iemi.',
	},
	{
		company: 'CIMeC – Centre for Mind/Brain Sciences, University of Trento',
		time: 'November 2014 - June 2015',
		title: 'BSc Internship',
		location: 'Rovereto, Italy',
		description:
			'Development of a behavioural experiment: differences in foreground/background colour perception. Supervisor: Prof. Liliana Albertazzi.',
	},
	{
		company: 'CIMeC – Centre for Mind/Brain Sciences, University of Trento',
		time: 'March 2014 - June 2014',
		title: 'BSc Internship',
		location: 'Rovereto, Italy',
		description:
			'Development of a computational model of visual perceptual learning. Supervisor: Prof. Massimo Turatto.',
	},
];

export const education: Education[] = [
	{
		school: 'Sussex Centre for Consciousness Science, University of Sussex',
		time: 'September 2017 - December 2022',
		degree: 'PhD in Neuroscience (Sussex Neuroscience 4-Year PhD Programme)',
		location: 'Brighton, UK',
		description:
			'Awarded 30 June 2023. Thesis: “Segmenting reality: investigating the role of perceptual change in shaping sense of reality in naturalistic contexts”. Supervisors: Prof. Anil Seth; Dr. Warrick Roseboom; Prof. Luc Berthouze.',
	},
	{
		school: 'Berlin School of Mind and Brain, Humboldt-Universität zu Berlin',
		time: 'October 2015 - October 2017',
		degree: 'MSc Mind and Brain (Track: Brain – Cognitive Neuroscience)',
		location: 'Berlin, Germany',
		description: 'Mark: 1.3 (sehr gut; 1.0 being the maximum possible grade).',
	},
	{
		school: 'Department of Psychology and Cognitive Science, University of Trento',
		time: 'February 2013 - July 2015',
		degree: 'BSc Science and Technology of Cognitive Psychology',
		location: 'Rovereto, Italy',
		description: 'Mark: 110/110 cum laude.',
	},
];

export const awards: Award[] = [
	{ time: '2022', title: 'Doctoral Open Research Prize', institution: 'University of Sussex' },
	{ time: '2017', title: 'Sussex Neuroscience 4-Year PhD Scholarship', institution: 'University of Sussex' },
	{ time: '2017', title: 'Mind and Brain Master Award', institution: 'Berlin School of Mind and Brain' },
	{ time: '2016', title: 'Merit Award for outstanding academic achievements', institution: 'University of Trento' },
];

export const skills: Skill[] = [
	{
		title: 'Neuroimaging & Physiology',
		description: 'OP-MEG, MEG, EEG (including portable/dry systems), eye tracking, ECG',
	},
	{
		title: 'Experimental Paradigms',
		description: 'Naturalistic paradigms (videos, movies), virtual and extended reality (VR/XR), psychophysics',
	},
	{
		title: 'Analysis & Modelling',
		description:
			'Computational modelling, machine learning and decoding (SPoC, CSP, LSTM), long-range temporal correlations',
	},
];

// Curated publications: these take priority over the ones synced from ORCID
// (src/data/publications.orcid.json, refreshed with `npm run sync:pubs` and on every deploy).
// Add an entry here to attach PDFs, code/OSF links or notes, or to list a work missing from ORCID.
const curatedPublications: Publication[] = [
	{
		title: 'An integrated virtual reality platform for naturalistic neuroimaging with magnetoencephalography',
		authors:
			'Zabbah, S., Alexander, N. A., Mohammadi, Y., Mariola, A., Seymour, R. A., Puvvada, S., Barnes, G. R., & Bach, D. R.',
		journal: 'bioRxiv',
		time: '2026',
		category: 'Preprints',
		doi: '10.64898/2026.01.28.701672',
		link: 'https://doi.org/10.64898/2026.01.28.701672',
	},
	{
		title: 'Linking brain–heart interactions to emotional arousal in immersive virtual reality',
		authors:
			'Fourcade, A., Klotzsche, F., Hofmann, S. M., Mariola, A., Nikulin, V. V., Villringer, A., & Gaebler, M.',
		journal: 'Psychophysiology, 61(12), e14696',
		time: '2024',
		category: 'Journal Publications',
		doi: '10.1111/psyp.14696',
		link: 'https://doi.org/10.1111/psyp.14696',
		pdf: 'pdf/fourcade_hofmann_klotzsche_mariola_psyp_2024.pdf',
	},
	{
		title: 'Using extended reality to study the experience of presence',
		authors: 'Suzuki, K., Mariola, A., Schwartzman, D. J., & Seth, A. K.',
		journal: 'In: Current Topics in Behavioral Neurosciences. Springer, Berlin, Heidelberg',
		time: '2023',
		category: 'Book Chapters',
		doi: '10.1007/7854_2022_401',
		link: 'https://link.springer.com/chapter/10.1007/7854_2022_401',
		pdf: 'pdf/suzuki_ctbn_2023.pdf',
	},
	{
		title: 'Event segmentation in continuous, naturalistic videos from model-based, data-driven, and human perspectives',
		authors: 'Mariola, A., Fountas, Z., Barnett, L., & Roseboom, W.',
		journal: 'PsyArXiv',
		time: '2022',
		category: 'Preprints',
		doi: '10.31234/osf.io/t6fkg',
		link: 'https://doi.org/10.31234/osf.io/t6fkg',
		pdf: 'pdf/mariola_evseg_2021.pdf',
		osf: 'https://osf.io/pr49b/',
	},
	{
		title: 'Decoding subjective emotional arousal from EEG during an immersive virtual reality experience',
		authors:
			'Hofmann, S. M.*, Klotzsche, F.*, Mariola, A.*, Nikulin, V. V., Villringer, A., & Gaebler, M.',
		journal: 'eLife, 10:e64812',
		time: '2021',
		category: 'Journal Publications',
		doi: '10.7554/eLife.64812',
		link: 'https://doi.org/10.7554/eLife.64812',
		pdf: 'pdf/hofmann_klotzsche_mariola_elife_2021.pdf',
		code: 'https://github.com/NeVRo-study/NeVRo',
		note: '*Shared first authorship, alphabetical order',
	},
	{
		title: 'Clear evidence for electrophysiological signatures of duration and rhythm prediction, but not across sensory modalities',
		authors: 'Mariola, A., Baykova, R., Chang, A. Y. C., Seth, A. K., & Roseboom, W.',
		journal: '2019 Conference on Cognitive Computational Neuroscience (CCN), Berlin, Germany',
		time: '2019',
		category: 'Conference Publications',
		doi: '10.32470/CCN.2019.1389-0',
		link: 'https://2019.ccneuro.org/Papers/ViewPapers.asp?PaperNum=1389',
		pdf: 'pdf/mariola_ccn_2019.pdf',
	},
	{
		title: 'Decoding subjective emotional arousal during a naturalistic VR experience from EEG using LSTMs',
		authors: 'Hofmann, S. M., Klotzsche, F., Mariola, A., Nikulin, V. V., Villringer, A., & Gaebler, M.',
		journal: '2018 IEEE International Conference on Artificial Intelligence and Virtual Reality (AIVR), Taichung, Taiwan, pp. 128–131',
		time: '2018',
		category: 'Conference Publications',
		doi: '10.1109/AIVR.2018.00026',
		link: 'https://ieeexplore.ieee.org/abstract/document/8613645',
		pdf: 'pdf/hofmann_aivr_2018.pdf',
	},
	{
		title: 'Using EEG to decode subjective levels of emotional arousal during an immersive VR roller coaster ride',
		authors: 'Klotzsche, F., Mariola, A., Hofmann, S., Nikulin, V. V., Villringer, A., & Gaebler, M.',
		journal: '2018 IEEE Conference on Virtual Reality and 3D User Interfaces (VR), Reutlingen, Germany, pp. 605–606',
		time: '2018',
		category: 'Conference Publications',
		doi: '10.1109/VR.2018.8446275',
		link: 'https://ieeexplore.ieee.org/abstract/document/8446275',
		pdf: 'pdf/klotzsche_vr_2018.pdf',
	},
	{
		title: 'Segmenting reality: investigating the role of perceptual change in shaping sense of reality in naturalistic contexts',
		authors: 'Mariola, A.',
		journal: 'PhD thesis, University of Sussex',
		time: '2023',
		category: 'Theses',
	},
];

export const publications: Publication[] = mergePublications(
	curatedPublications,
	orcidPublications as Publication[],
);
