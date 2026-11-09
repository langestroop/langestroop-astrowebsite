import type { Education, Experience, Publication, Skill } from '@/types/cv';

// Entries are displayed in the order they appear here (most recent first).

export const experiences: Experience[] = [
	{
		company: 'OPM-MEG Group, Department of Imaging Neuroscience, University College London',
		time: 'Current',
		title: 'Postdoctoral Research Fellow',
		location: 'London, UK',
		description:
			'With Prof Gareth Barnes. Developing and using Optically Pumped Magnetometers (OPM) for naturalistic neuroscience experiments.',
	},
	{
		company: 'Episodic Memory Group, University of Sussex',
		time: '',
		title: 'Postdoctoral Research Fellow',
		location: 'Brighton, UK',
		description: 'With Prof Chris Bird.',
	},
];

export const education: Education[] = [
	{
		school: 'University of Sussex — Sussex Centre for Consciousness Science',
		time: 'Sept 2017 - Dec 2022',
		degree: 'PhD in Neuroscience (4-Year Sussex Neuroscience Programme)',
		location: 'Brighton, UK',
		description:
			'“Segmenting reality: investigating the role of perceptual change in shaping sense of reality in naturalistic contexts”. Supervised by Prof Anil Seth, Dr Warrick Roseboom and Prof Luc Berthouze.',
	},
	{
		school: 'Berlin School of Mind and Brain, Humboldt-Universität zu Berlin',
		time: 'Oct 2015 - Oct 2017',
		degree: 'MSc Mind and Brain (Track: Brain; Cognitive Neuroscience)',
		location: 'Berlin, Germany',
		description:
			'Thesis at the MindBrainBody Institute (Prof Arno Villringer, Dr Michael Gaebler): decoding subjective emotional arousal from EEG during an immersive VR experience.',
	},
	{
		school: 'University of Trento',
		time: 'Feb 2013 - Jul 2015',
		degree: 'BSc Science and Technologies of Cognitive Psychology',
		location: 'Rovereto, Italy',
	},
];

export const skills: Skill[] = [
	{
		title: 'Neuroimaging & Physiology',
		description: 'OPM-MEG, MEG, EEG (including portable/dry systems), eye tracking, ECG',
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

export const publications: Publication[] = [
	{
		title: 'Linking brain–heart interactions to emotional arousal in immersive virtual reality',
		authors:
			'Fourcade, A., Klotzsche, F., Hofmann, S. M., Mariola, A., Nikulin, V., Villringer, A., & Gaebler, M.',
		journal: 'Psychophysiology',
		time: '2024',
		category: 'Journal Publications',
		doi: '10.1111/psyp.14696',
		link: 'https://doi.org/10.1111/psyp.14696',
		pdf: 'pdf/fourcade_hofmann_klotzsche_mariola_psyp_2024.pdf',
	},
	{
		title: 'Using extended reality to study the experience of presence',
		authors: 'Suzuki, K., Mariola, A., Schwartzman, D. J., & Seth, A. K.',
		journal: 'Current Topics in Behavioral Neurosciences',
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
			'Hofmann, S. M.*, Klotzsche, F.*, Mariola, A.*, Nikulin, V., Villringer, A., & Gaebler, M.',
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
		authors: 'Mariola, A., Baykova, R., Chang, A. Y., Seth, A. K., & Roseboom, W.',
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
		journal: '2018 IEEE International Conference on Artificial Intelligence and Virtual Reality (AIVR), pp. 128–131',
		time: '2018',
		category: 'Conference Publications',
		doi: '10.1109/AIVR.2018.00026',
		link: 'https://ieeexplore.ieee.org/abstract/document/8613645',
		pdf: 'pdf/hofmann_aivr_2018.pdf',
	},
	{
		title: 'Using EEG to decode subjective levels of emotional arousal during an immersive VR roller coaster ride',
		authors: 'Klotzsche, F., Mariola, A., Hofmann, S., Nikulin, V. V., Villringer, A., & Gaebler, M.',
		journal: '2018 IEEE Conference on Virtual Reality and 3D User Interfaces (VR), pp. 605–606',
		time: '2018',
		category: 'Conference Publications',
		doi: '10.1109/VR.2018.8446275',
		link: 'https://ieeexplore.ieee.org/abstract/document/8446275',
		pdf: 'pdf/klotzsche_vr_2018.pdf',
	},
];
