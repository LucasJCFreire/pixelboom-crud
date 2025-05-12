import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import { useLocationStore } from '@/store/store';
import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import {
	useNavigate,
	useLocation as useReactRouterLocation,
} from 'react-router-dom';

interface Location {
	name: string;
	abbreviation: string;
}

interface Props {
	locations: Location[];
}

export function Select({ locations }: Props) {
	const { isMobile } = useSidebar();
	const [activeLocation, setActiveLocation] = useState<Location>(locations[0]);
	const navigate = useNavigate();
	const reactLocation = useReactRouterLocation();
	const { setLocation } = useLocationStore();

	const handleLocationChange = (newLocation: Location) => {
		setActiveLocation(newLocation);
		setLocation(newLocation.abbreviation.toLowerCase());

		const currentPath =
			reactLocation.pathname.split('/').slice(2).join('/') || 'usuarios';
		navigate(`/${newLocation.abbreviation.toLowerCase()}/${currentPath}`);
	};

	if (!activeLocation) return null;

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
						>
							<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-accent text-primary">
								<span className="font-semibold">
									{activeLocation.abbreviation}
								</span>
							</div>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">
									{activeLocation.name}
								</span>
							</div>
							<ChevronsUpDown className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						align="start"
						side={isMobile ? 'bottom' : 'right'}
						sideOffset={4}
					>
						<DropdownMenuLabel className="text-xs text-muted-foreground">
							Locations
						</DropdownMenuLabel>
						{locations.map((location, index) => (
							<DropdownMenuItem
								key={location.name}
								onClick={() => handleLocationChange(location)}
								className="gap-2 p-2 cursor-pointer"
							>
								<div className="flex size-6 items-center justify-center rounded-sm border bg-accent">
									<span>{location.abbreviation}</span>
								</div>
								{location.name}
								<DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
