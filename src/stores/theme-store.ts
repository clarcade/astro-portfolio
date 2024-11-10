import {atom} from 'nanostores';

export type ThemeType = 'light' | 'dark';
type LocalStorageThemeType = ThemeType | null;
const themeMap = new Map([
	['light', true],
	['dark', true],
]);

const localStorageTheme: LocalStorageThemeType = localStorage.getItem('theme') as LocalStorageThemeType;
const defaultTheme = localStorageTheme && themeMap.has(localStorageTheme)
	? localStorageTheme
	: 'light';

console.log('theme-store-->defaultTheme', defaultTheme);

export const theme = atom<ThemeType>(defaultTheme);

export const setTheme = (newTheme: ThemeType) => {
	// console.log('set locale storage theme to', newTheme);
	localStorage.setItem('theme', newTheme);

	theme.set(newTheme);
};
