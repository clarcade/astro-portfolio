import type {EmployerHistoryData} from '../components/EmployerHistory/EmployerHistory.astro';

export const adobeWorkHistory: EmployerHistoryData = {
	id: 'adobe-work-history',
	companyName: 'Adobe',
	fromDate: (new Date('November 2021')).getTime(),
	toDate: 'Current',
	icon: 'adobe-logo',
	position: 'Senior Frontend Software Engineer (L4)',
	projects: [
		{
			id: 'adobe-low-project',
			name: 'Adobe - Learn on the Web',
			link: '/projects/learn-on-the-web',
			fromDate: (new Date('July 2023')).getTime(),
			toDate: 'Current',
			content: [
				{
					subject: 'Responsibilities',
					items: [
						'Develop and maintain Learn on the Web (LOW) site (ie creativecloud.adobe.com/learn).',
						'Technologies: React, Typescript, SASS, Webpack, Jest, Sinon, Enzyme, Jenkins, AWS',
					],
				},
				{
					subject: 'Major Achievements',
					items: [
						'Assumed sole ownership of LoW project in July 2023 until more teammates joined in September 2023',
						'Migrated external content into LoW which involved updating SEO metadata, batch rollouts by locales, and coordinated with external team to redirect traffic from old site to LoW',
						'Added support for new apps (ie Substance 3D/Firefly/Express) to LoW',
						'Implemented user tracking service to track user activity and update UI based on user\'s progress',
						'Re-architecting LoW onto a new tech stack and moving onto new domain (ie currently on creativecloud.adobe.com/learn) which includes migrating content and user traffic to new domain.',
					],
				},
			],
		},
		{
			id: 'adobe-cc-and-dhub',
			name: 'Adobe - Creative Cloud and Discover Hub',
			link: '/projects/creative-cloud-and-discover-hub',
			icon: 'creativecloud',
			fromDate: (new Date('November 2021')).getTime(),
			toDate: (new Date('June 2023')).getTime(),
			content: [
				{
					subject: 'Responsibilities',
					items: [
						'Develop and maintain logged-in and logged-out Creative Cloud (CC) homepage sites (ie creativecloud.adobe.com), and Discover Hub site (ie creativecloud.adobe.com/discover).',
						'Technologies: React, Typescript, SASS, Webpack, Jest, Enzyme, Jenkins, AWS',
					],
				},
				{
					subject: 'Major Achievements',
					items: [
						'Added a new way to set locales via the browser\'s url path on both logged-in and logged-out CC sites.',
						'Added 41 new locales to Discover Hub.',
					],
				},
			],
		},
	],
};

export const ifitWorkHistory: EmployerHistoryData = {
	id: 'ifit-work-history',
	companyName: 'iFIT',
	fromDate: (new Date('July 2020')).getTime(),
	toDate: (new Date('November 2021')).getTime(),
	icon: 'iFIT-logo',
	position: 'Full Stack Engineer',
	projects: [
		{
			id: 'ifit-project',
			name: 'iFIT Webviews',
			link: '/projects/ifit-webviews',
			icon: 'iFIT-logo',
			content: [
				{
					subject: 'Responsibilities',
					items: [
						'Developed and maintained webviews used in iFit\'s android/ios embedded devices.',
						'Technologies: React, Typescript, Node, AWS, Yarn, Jest, Enzyme, React Testing Library.',
					],
				},
				{
					subject: 'Major Achievements',
					items: [
						'Created an event service that allows webviews to request information from the native app which wasn\'t available before. The service is now being implemented by all webviews across the organization.',
					],
				},
			],
		},
	],
};

export const workHistory: Array<EmployerHistoryData> = [
	adobeWorkHistory,
	ifitWorkHistory,
];
