export interface MainNavigationLink {
	label: string;
	link: string;
}

export interface MainNavigationLinksMetadata {
	links: MainNavigationLink[];
	selectedLinkByPath: string;
}
