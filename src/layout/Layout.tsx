import type { ReactElement } from 'react';
import { Outlet } from 'react-router';

export function Layout(): ReactElement {
	return <Outlet />;
}
