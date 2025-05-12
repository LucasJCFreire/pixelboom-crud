import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useLocationStore } from '@/store/store';
import { Activity, FileCheck, User } from 'lucide-react';
import type { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function NavMenu(): ReactElement {
	const navigate = useNavigate();
	const { currentLocation } = useLocationStore();
	const location = useLocation();

	const items = [
		{ title: 'Dashboard', url: 'dashboard', icon: Activity },
		{ title: 'Usuários', url: 'usuarios', icon: User },
		{ title: 'Documentos', url: 'documentos', icon: FileCheck },
	];

	const lastSegment = location.pathname.split('/').pop();

	return (
		<SidebarGroup>
			<SidebarGroupLabel className="h-8 mb-1.5">Menu</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => {
						const isActive = lastSegment === item.url;

						return (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton
									onClick={() => navigate(`/${currentLocation}/${item.url}`)}
									className={`text-sm px-3 py-2 cursor-pointer mb-1.5 rounded-full h-10 hover:bg-[#102822] hover:text-white active:bg-[#102822] active:text-white ${
										isActive
											? 'bg-[#102822] text-white'
											: 'hover:bg-[#102822] hover:text-white'
									}`}
								>
									<item.icon />
									<span>{item.title}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						);
					})}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
