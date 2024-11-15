export const monthNumberToFullNameMap = new Map([
	[0, 'January'],
	[1, 'February'],
	[2, 'March'],
	[3, 'April'],
	[4, 'May'],
	[5, 'June'],
	[6, 'July'],
	[7, 'August'],
	[8, 'September'],
	[9, 'October'],
	[10, 'November'],
	[11, 'December'],
]);
export const monthNumberToShortNameMap = new Map([
	[0, 'Jan'],
	[1, 'Feb'],
	[2, 'Mar'],
	[3, 'Apr'],
	[4, 'May'],
	[5, 'June'],
	[6, 'July'],
	[7, 'Aug'],
	[8, 'Sep'],
	[9, 'Oct'],
	[10, 'Nov'],
	[11, 'Dec'],
]);

export const getMonthShortNameFromDate = (date: Date) => {
	return monthNumberToShortNameMap.get(date.getMonth());
};
