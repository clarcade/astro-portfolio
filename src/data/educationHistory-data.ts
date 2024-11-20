import type {EducationHistoryData} from '../components/EducationHistory.astro';

export const byuIdahoHistory: EducationHistoryData = {
	id: 'byu-idaho',
	institution: 'BYU-Idaho',
	toDate: (new Date('July 2014')).getTime(),
	imgSrc: 'byu-idaho',
	type: 'Degree',
	value: 'Bachelor of Science in Computer Science',
};

export const udacityHistory: EducationHistoryData = {
	id: 'udacity',
	institution: 'Udacity',
	toDate: (new Date('June 2020')).getTime(),
	imgSrc: 'udacity',
	type: 'Nanodegree',
	value: 'User Experience',
};

export const educationHistory = [
	byuIdahoHistory,
	udacityHistory,
];
