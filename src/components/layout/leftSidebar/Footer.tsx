import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
	SidebarFooter,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import { HeadsetIcon, Send } from 'lucide-react';
import type { ReactElement } from 'react';

export function Footer(): ReactElement {
	const { isMobile } = useSidebar();

	return (
		<SidebarFooter className="mx-auto w-56">
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton className="px-3 py-2 h-10 rounded-full flex justify-between cursor-pointer bg-background">
								<span className="text-sm">Precisa de ajuda?</span>
								<HeadsetIcon className="text-sidebar-foreground" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
							align="start"
							side={isMobile ? 'top' : 'right'}
							sideOffset={19}
						>
							<DropdownMenuLabel className="text-xs text-muted-foreground mb-2">
								Suporte
							</DropdownMenuLabel>
							<div className="flex flex-col gap-2 p-2">
								<Input placeholder="Digite sua mensagem..." />
								<Button
									size="sm"
									className="self-end flex gap-2 items-center cursor-pointer rounded-2xl"
								>
									<Send className="w-4 h-4" />
									<span>Enviar</span>
								</Button>
							</div>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
	);
}
