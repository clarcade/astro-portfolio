import type {SkillsCardData} from '../components/SkillsCard.astro';
import FrontendImage from '../images/frontend-image.jpg';
import BackendImage from '../images/backend-image.jpg';
import OtherSkillsImage from '../images/other-skills-image.jpg';

export const frontendSkillsData: SkillsCardData = {
	img: FrontendImage,
	imgAltText: 'Collage of frontend technologies and skills',
	title: 'Frontend Skills',
	items: [
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
	],
};

export const backendSkillsData: SkillsCardData = {
	img: BackendImage,
	imgAltText: 'Collage of backend technologies and skills',
	title: 'Backend Skills',
	items: [
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
	],
};

export const otherSkillsData: SkillsCardData = {
	img: OtherSkillsImage,
	imgAltText: 'Collage of other technologies and skills',
	title: 'Other Skills',
	items: [
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
	],
};

export const skillsData: Array<SkillsCardData> = [
	frontendSkillsData,
	backendSkillsData,
	otherSkillsData,
];
