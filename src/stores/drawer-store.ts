import {map} from 'nanostores'

export type DrawerId = 'leftnav-drawer';
export type DrawerStatus = 'open' | 'close';
export type DrawerMap = {
	[key in DrawerId]: DrawerStatus;
};
export interface SetDrawerStatusProps {
	drawerId: DrawerId;
	status: DrawerStatus;
}

export const drawerAndStatusMap = map<DrawerMap>({
	'leftnav-drawer': 'close',
});

export const setDrawerStatus = ({
	drawerId,
	status,
}: SetDrawerStatusProps) => {
	drawerAndStatusMap.setKey('leftnav-drawer', status);
};
