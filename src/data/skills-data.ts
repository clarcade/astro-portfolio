import type {SkillsData} from '../components/SkillsCard.astro';

export const frontendSkillsData: Array<SkillsData> = [
	{
		topic: 'HTML 5',
		items: ['SEO'],
	},
	{
		topic: 'CSS',
		items: [
			'SCSS, LESS',
			'BEM',
			'Responsive design, Mobile-first',
		],
	},
	{
		topic: 'Javascript',
		items: [
			'ES6, Typescript',
			'React, Gatsby, AngularJS, Polymer',
			'Jest, Enzyme, Mocha, Chai, React Testing Library',
		],
	},
];

export const backendSkillsData: Array<SkillsData> = [
	{
		topic: 'Node',
		items: ['Express'],
	},
	{
		topic: 'PHP',
	},
	{
		topic: 'AWS (breadth, not depth)',
	},
	{
		topic: 'Jenkins',
	},
	{
		topic: 'CMS and Databases',
		items: [
			'Contentful',
			'MongoDB, Firebase',
			'MySQL, SQL',
		],
	},
];

export const otherSkillsData: Array<SkillsData> = [
	{
		topic: 'Design',
		items: [
			'Figma',
			'Sketch',
		],
	},
	{
		topic: 'Devops',
		items: [
			'Webpack',
			'Jarvis',
		],
	},
	{
		topic: 'Other tools',
		items: [
			'New Relic',
			'Selenium',
			'Github, JIRA',
			'Netlify, Heroku',
		],
	},
];
