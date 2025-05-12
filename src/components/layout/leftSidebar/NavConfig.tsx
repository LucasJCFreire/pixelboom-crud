import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Settings } from 'lucide-react';
import type { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavConfig(): ReactElement {
	const location = useLocation();

	const items = [
		{
			title: 'Geral',
			url: '/configuracoes',
			icon: Settings,
		},
	];

	return (
		<SidebarGroup>
			<SidebarGroupLabel className="h-8 mb-1.5">
				Configurações
			</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => {
						const isActive = location.pathname === item.url;

						return (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton
									asChild
									className={`text-sm px-3 py-2 mb-1.5 rounded-full h-10 hover:bg-[#102822] hover:text-white active:bg-[#102822] active:text-white ${
										isActive
											? 'bg-[#102822] text-white'
											: 'hover:bg-[#102822] hover:text-white'
									}`}
								>
									<Link to={item.url}>
										<item.icon />
										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						);
					})}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
