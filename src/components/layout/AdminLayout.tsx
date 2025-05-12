import { UserHandle } from '@/components/layout/rightSidebar/userHandle';
import { useUserHandleStore } from '@/lib/store';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { Bell, CircleHelp } from 'lucide-react';
import type { ReactElement } from 'react';
import { Outlet } from 'react-router';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { Toaster } from '../ui/toaster';
import { AppSidebar } from './leftSidebar/AppSidebar';

export function AdminLayout(): ReactElement {
	const { isOpen, setIsOpen } = useUserHandleStore();
	const headerButtons = [
		{
			id: 'help',
			icon: <CircleHelp />,
		},
		{
			id: 'bell',
			icon: <Bell />,
		},
	];

	return (
		<SidebarProvider
			style={{ '--sidebar-width': '240px' } as React.CSSProperties}
		>
			<AppSidebar />
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
						<Avatar className="h-10 w-10">
							<AvatarImage src="/profile.png" alt="profile" />
							<AvatarFallback>LJ</AvatarFallback>
						</Avatar>
					</div>
				</header>
				<Outlet />
			</main>
			<UserHandle isOpen={isOpen} onOpenChange={setIsOpen} />
			<Toaster />
		</SidebarProvider>
	);
}
