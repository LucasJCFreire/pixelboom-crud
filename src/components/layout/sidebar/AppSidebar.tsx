import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/ui/sidebar';
import type { ReactElement } from 'react';

export function AppSidebar(): ReactElement {
	return (
		<Sidebar>
			<header className="border-b h-[72px] py-5 pl-6">
				<Button className="w-24 h-8 p-0 font-bold text-base cursor-pointer">
					Logo
				</Button>
			</header>
		</Sidebar>
	);
}
