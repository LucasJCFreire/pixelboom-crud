import { Button } from '@/components/ui/button';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import type { ReactElement } from 'react';
import { Footer } from './Footer';
import { NavConfig } from './NavConfig';
import { NavMenu } from './NavMenu';
import { Select } from './Select';

export function AppSidebar(): ReactElement {
	const data = {
		locations: [
			{
				name: 'Filial A',
				abbreviation: 'FA',
			},
			{
				name: 'Filial B',
				abbreviation: 'FB',
			},
			{
				name: 'Filial C',
				abbreviation: 'FC',
			},
		],
	};
	return (
		<Sidebar>
			<header className="border-b h-[72px] py-5 pl-6">
				<Button className="w-24 h-8 p-0 font-bold text-base cursor-pointer">
					Logo
				</Button>
			</header>
			<Select locations={data.locations} />
			<SidebarContent className="mx-auto w-56">
				<NavMenu />
				<NavConfig />
			</SidebarContent>
			<Footer />
		</Sidebar>
	);
}
