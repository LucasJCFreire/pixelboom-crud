import { Bell, CircleHelp } from 'lucide-react';
import type { ReactElement } from 'react';
import { Outlet } from 'react-router';
import { Button } from '../ui/button';
import { SidebarTrigger } from '../ui/sidebar';

export function Layout(): ReactElement {
	const headerButtons = [
		{
			id: 'help',
			icon: <CircleHelp />,
		},
		{
			id: 'bell',
			icon: <Bell />,
		},
		{
			id: 'profile',
			icon: <img src="/profile.png" alt="profile" />,
		},
	];

	return (
		<main className="w-full">
			<header className="border-b h-[72px] flex justify-between items-center px-4 sticky top-0 bg-background z-10">
				<SidebarTrigger />
				<div className="flex gap-3">
					{headerButtons.map((btn) => (
						<Button
							key={btn.id}
							variant="outline"
							className="rounded-full h-10 w-10 p-0 cursor-pointer"
						>
							{btn.icon}
						</Button>
					))}
				</div>
			</header>
			<Outlet />
		</main>
	);
}
