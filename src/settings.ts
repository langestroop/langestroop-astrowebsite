interface Profile {
	fullName: string
	title: string
	institute: string
	author_name: string
	research_areas: { title: string; description: string; field: string }[]
}

export const profile: Profile = {
	fullName: 'Alberto Mariola',
	title: 'OPM Research Fellow',
	institute: 'Department of Imaging Neuroscience, University College London',
	author_name: 'Mariola, A.', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: 'Naturalistic Neuroimaging',
			description:
				'Developing and using Optically Pumped Magnetometers (OPMs), alongside M/EEG and eye tracking, to study the brain during naturalistic experiences.',
			field: 'neuroimaging',
		},
		{
			title: 'Event Segmentation',
			description:
				'How we segment the continuous flow of information reaching our senses into units of experience, and how this shapes memory and reality monitoring.',
			field: 'perception',
		},
		{
			title: 'Perception, Memory & Metacognition',
			description:
				'The neural and computational mechanisms linking what we perceive to what we remember and how we judge it.',
			field: 'neuroscience',
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'a.mariola@ucl.ac.uk',
	linkedin: 'https://www.linkedin.com/in/alberto-mariola-449b91160/',
	x: 'https://x.com/langestroop',
	bluesky: 'https://bsky.app/profile/langestroop.bsky.social',
	github: 'https://github.com/langestroop',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=93msY9YAAAAJ',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0003-4660-1306',
}

export const template = {
	website_url: 'https://langestroop.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
	base: '/langestroop-astrowebsite', // Repository name starting with /
}

export const seo = {
	default_title: 'Alberto Mariola',
	default_description:
		'Alberto Mariola, OPM Research Fellow at UCL. Naturalistic neuroimaging, event segmentation, perception, memory and metacognition.',
	default_image: `${template.base}/images/og.jpg`,
}
