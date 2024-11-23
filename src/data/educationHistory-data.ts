import type {EducationHistoryData} from '../components/EducationHistory.astro';
import UdacityUxNanodegreeImage from '../images/Udacity-User-Experience-Nanodegree.png';
import BYUIdahoLogo from '../images/byu-idaho-logo.png';
import AwsCloudPractitionerImage from '../images/awsCloudPractitioner.png';

export const byuIdahoHistory: EducationHistoryData = {
	id: 'byu-idaho',
	institution: 'BYU-Idaho',
	toDate: (new Date('July 2014')).getTime(),
	imgMetadata: {
		height: 225,
		src: BYUIdahoLogo,
		width: 300,
		format: 'webp',
		alt: 'User Experience Nanodegree from Udacity',
	},
	type: 'Degree',
	value: 'Bachelor of Science in Computer Science',
};

export const udacityHistory: EducationHistoryData = {
	id: 'udacity',
	institution: 'Udacity',
	toDate: (new Date('June 2020')).getTime(),
	imgMetadata: {
		height: 231,
		src: UdacityUxNanodegreeImage,
		width: 300,
		format: 'webp',
		alt: 'User Experience Nanodegree issued by Udacity',
	},
	type: 'Nanodegree',
	value: 'User Experience',
	link: 'https://www.udacity.com/certificate/e/752ae17e-8598-11ea-895f-d7d4c668e656',
};

export const awsCloudPractitionerHistory: EducationHistoryData = {
	id: 'aws-cloud-practitioner',
	institution: 'AWS',
	imgMetadata: {
		height: 300,
		src: AwsCloudPractitionerImage,
		width: 300,
		format: 'webp',
		alt: 'AWS Certified Cloud Practitioner badge image. Certification. Foundational level. Issued by Amazon Web Services Training and Certification',
	},
	type: 'Certificate',
	value: 'Cloud Practitioner',
	link: 'https://www.credly.com/badges/d88f06ca-b4bc-4442-8340-3e7a0a9b34db',
};

export const educationHistory = [
	byuIdahoHistory,
	udacityHistory,
	awsCloudPractitionerHistory,
];
