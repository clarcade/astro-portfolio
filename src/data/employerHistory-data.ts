import type {EmployerHistoryData} from '../components/EmployerHistory/EmployerHistory.astro';

export const adobeWorkHistory: EmployerHistoryData = {
	id: 'adobe-work-history',
	companyName: 'Adobe',
	fromDate: (new Date('November 2021')).getTime(),
	toDate: 'Current',
	// icon: 'adobe-logo',
	position: 'Senior Frontend Software Engineer (L4)',
	projects: [
		{
			id: 'adobe-low-project',
			name: 'Adobe - Learn on the Web',
			shortName: 'Learn on the Web',
			link: '/projects/learn-on-the-web',
			fromDate: (new Date('July 2023')).getTime(),
			toDate: 'Current',
			content: [
				{
					subject: 'Responsibilities:',
					items: [
						'Develop and maintain Learn on the Web (LOW) site (ie creativecloud.adobe.com/learn).',
						'Technologies: React, Typescript, SASS, Webpack, Jest, Sinon, Enzyme, Jenkins, AWS',
					],
				},
				{
					subject: 'Major Achievements:',
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
			shortName: 'Creative Cloud and Discover Hub',
			link: '/projects/creative-cloud-and-discover-hub',
			// icon: 'creativecloud',
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
	// icon: 'iFIT-logo',
	position: 'Full Stack Engineer',
	projects: [
		{
			id: 'ifit-project',
			name: 'iFIT Webviews',
			// link: '/projects/ifit-webviews',
			// icon: 'iFIT-logo',
			content: [
				{
					subject: 'Responsibilities:',
					items: [
						'Developed and maintained webviews used in iFit\'s android/ios embedded devices.',
						'Technologies: React, Typescript, Node, AWS, Yarn, Jest, Enzyme, React Testing Library.',
					],
				},
				{
					subject: 'Major Achievements:',
					items: [
						'Created an event service that allows webviews to request information from the native app which wasn\'t available before. The service is now being implemented by all webviews across the organization.',
					],
				},
			],
		},
	],
};

export const thumbtackWorkHistory: EmployerHistoryData = {
	id: 'thumbtack-work-history',
	companyName: 'Thumbtack',
	fromDate: (new Date('September 2019')).getTime(),
	toDate: (new Date('March 2020')).getTime(),
	// icon: 'thumbtack-logo',
	position: 'Software Engineer',
	projects: [
		{
			id: 'thumbtack-project',
			name: 'Thumbtack',
			// link: '/projects/thumbtack',
			content: [
				{
					subject: 'Responsibilities:',
					items: [
						'Build and develop Thumbtack\'s "Help" site',
						'Technologies: React, CSS, Salesforce CMS, Contentful CMS, Node, TypeScript.',
					],
				},
				{
					subject: 'Major Achievements:',
					items: [
						'Moved content out of Salesforce\'s CMS into Contentful CMS which would save the company tens of thousands annually.',
						'Reduced data management complexity by refactoring from using Redux to React\'s Context.',
					],
				},
			],
		},
	],
};

export const cricutWorkHistory: EmployerHistoryData = {
	id: 'cricut-work-history',
	companyName: 'Cricut',
	fromDate: (new Date('April 2017')).getTime(),
	toDate: (new Date('December 2018')).getTime(),
	// icon: 'cricut-logo',
	position: 'Frontend Software Engineer',
	projects: [
		{
			id: 'cricut-project',
			name: 'Cricut',
			// link: '/projects/cricut',
			content: [
				{
					subject: 'Responsibilities:',
					items: [
						'Develop and maintain Cricut\'s logged-in site which interacts with Cricut\'s crafting machines and tools, and also the crafting social platform.',
						'Technologies: AngularJS, CSS, LESS, JS, AngularJS, Node, TypeScript.',
					],
				},
				{
					subject: 'Major Achievements:',
					items: [
						'Pioneered Cricut\'s crafting social platform that\'s now used by 5 million+ users.',
						'Created UI for effective users interaction, APIs for interaction with die cut machines.',
					],
				},
			],
		},
	],
};

export const needleWorkHistory: EmployerHistoryData = {
	id: 'needle-work-history',
	companyName: 'Needle',
	fromDate: (new Date('September 2016')).getTime(),
	toDate: (new Date('April 2017')).getTime(),
	position: 'Senior Frontend Engineer',
	projects: [
		{
			id: 'needle-project',
			name: 'Needle',
			content: [
				{
					subject: 'Responsibilities:',
					items: [
						'Responsible for all of Needle\'s consumer and in-house client-side code.',
						'Effectively communicated issues and barriers to the Project Management and Production teams',
						'Technologies: AngularJS, CSS, LESS, JS, AngularJS, Node, TypeScript.',
					],
				},
				{
					subject: 'Major Achievements:',
					items: [
						'As the sole frontend developer for Needle, I improved Needle\'s client-side performance by optimizing image assets, and reducing code complexity by migrating a dozen individual technologies into a single AngularJS framework.',
						'Introduced code quality, and reduced coding bugs and time spent reviewing PRs by adding code style linting and unit tests.',
					],
				},
			],
		},
	],
};

export const familySearchWorkHistory: EmployerHistoryData = {
	id: 'family-search-work-history',
	companyName: 'FamilySearch',
	fromDate: (new Date('September 2015')).getTime(),
	toDate: (new Date('August 2016')).getTime(),
	position: 'Web Developer',
	projects: [
		{
			id: 'family-search-project',
			name: 'FamilySearch',
			content: [
				{
					subject: 'Responsibilities:',
					items: [
						'Build better on-boarding experiences for the FamilySearch.org website.',
						'Technologies: HTML/CSS/JS, AngularJS, Polymer, Node, ExpressJS, Gulp, NPM, Git, Heroku, Bower, and Mocha and Chai.',
					],
				},
				{
					subject: 'Major Achievements:',
					items: [
						'Built a new user onboarding experience call "Booklet" which mirrored an actual booklet where users wrote down their geneology so they could have an easy experience onboarding to FamilySearch site.',
						'Improved user experience by gather user analytics and performing user experience testing routinely with our users',
					],
				},
			],
		},
	],
};

export const insideSalesDotComWorkHistory: EmployerHistoryData = {
	id: 'isdc-work-history',
	companyName: 'InsideSales.com',
	fromDate: (new Date('September 2014')).getTime(),
	toDate: (new Date('July 2015')).getTime(),
	position: 'Software Engineer',
	projects: [
		{
			id: 'isdc-project',
			name: 'InsideSales.com',
			content: [
				{
					subject: 'Responsibilities:',
					items: [
						'Build in-house data UI using AngularJS',
						'Technologies: HTML, SCSS, AngularJS, Protractor, PHP, MySQL, Restangular (JS), peej/tonic (PHP), Karma, Jasmine, Grunt, NPM, Bower, Composer, Doctrine ORM (PHP), d3 (JS).',
					],
				},
				{
					subject: 'Major Achievements:',
					items: [
						'Built reusable data UI components using AngularJS directives, controllers, and services.',
						'Increased unit testing coverage by 50%, and then was temporarily moved to help with a company-wide initiative to help QE with increasing code coverage.',
					],
				},
			],
		},
	],
};

export const scottsMiracleGroWorkHistory: EmployerHistoryData = {
	id: 'scotts-mg-work-history',
	companyName: 'The Scotts Miracle-Gro Company',
	fromDate: (new Date('May 2014')).getTime(),
	toDate: (new Date('August 2014')).getTime(),
	position: 'Web Developer Intern',
	projects: [
		{
			id: 'scotts-mg-project',
			name: 'The Scotts Miracle-Gro Company',
			content: [
				{
					subject: 'Responsibilities:',
					items: [
						'Updating and managing content for scotts.com, miraclegro.com, roundup.com, scottslawnservice.com, ortho.com, and orthohomedefence.com sites.',
						'Technologies: CSS, HTML, JavaScript, JSP, Java, ATG\'s Business Control Center (BCC), JIRA, Bitbucket, and Confluence.',
					],
				},
				{
					subject: 'Major Achievements:',
					items: [
						'Added client-side UI using AngularJS, and CSS3.',
						'Added documention for full-time employees in Confluence on how to use ATG\'s BCC software including creating/uploading content to the BCC.',
					],
				},
			],
		},
	],
};

export const ldsWorkHistory: EmployerHistoryData = {
	id: 'lds-work-history',
	companyName: 'The Church of Jesus Christ of Latter-day Saints',
	fromDate: (new Date('May 2014')).getTime(),
	toDate: (new Date('August 2014')).getTime(),
	position: 'Software Development Engineer Intern',
	projects: [
		{
			id: 'lds-project',
			name: 'Church Education System (CES)',
			content: [
				{
					subject: 'Responsibilities:',
					items: [
						'Develop and maintain various aspects of the Church Education system',
						'Technologies: C#, Visual Studio, .NET, JS, AngularJS.',
					],
				},
				{
					subject: 'Major Achievements:',
					items: [
						'Developed an automated file-uploading application that saved hundreds of man hours over the course of the project.',
						'Solved various security issues using proxy tools such as Burp and Fiddler.',
					],
				},
			],
		},
	],
};

export const workHistory: Array<EmployerHistoryData> = [
	adobeWorkHistory,
	ifitWorkHistory,
	thumbtackWorkHistory,
	cricutWorkHistory,
	needleWorkHistory,
	familySearchWorkHistory,
	insideSalesDotComWorkHistory,
	scottsMiracleGroWorkHistory,
	ldsWorkHistory,
];
