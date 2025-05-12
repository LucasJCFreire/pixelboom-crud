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
import { useEffect, useState } from 'react';
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
	const [activeLocation, setActiveLocation] = useState<Location | null>(null);
	const navigate = useNavigate();
	const reactLocation = useReactRouterLocation();
	const { setLocation } = useLocationStore();

	useEffect(() => {
		const pathAbbr = reactLocation.pathname.split('/')[1]?.toLowerCase();
		const validAbbrs = locations.map((loc) => loc.abbreviation.toLowerCase());

		const savedAbbr = localStorage.getItem('currentLocation')?.toLowerCase();

		const initialAbbr = validAbbrs.includes(pathAbbr)
			? pathAbbr
			: validAbbrs.includes(savedAbbr ?? '')
				? savedAbbr
				: 'fa';

		if (initialAbbr) {
			const initialLocation = locations.find(
				(loc) => loc.abbreviation.toLowerCase() === initialAbbr,
			);

			if (initialLocation) {
				setActiveLocation(initialLocation);
				setLocation(initialAbbr);
				localStorage.setItem('currentLocation', initialAbbr);
			}
		}
	}, [locations, reactLocation.pathname, setLocation]);

	const handleLocationChange = (newLocation: Location) => {
		const abbr = newLocation.abbreviation.toLowerCase();
		setActiveLocation(newLocation);
		setLocation(abbr);
		localStorage.setItem('currentLocation', abbr);

		const currentPath =
			reactLocation.pathname.split('/').slice(2).join('/') || 'usuarios';
		navigate(`/${abbr}/${currentPath}`);
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
								key={location.abbreviation}
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
