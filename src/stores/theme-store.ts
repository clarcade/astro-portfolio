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

export const theme = atom<ThemeType>(defaultTheme);

export const setTheme = (newTheme: ThemeType) => {
	localStorage.setItem('theme', newTheme);

	theme.set(newTheme);
};
