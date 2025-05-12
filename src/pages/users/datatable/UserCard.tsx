import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Calendar,
	Clock3,
	EllipsisVertical,
	User as IconUser,
	Tag,
} from 'lucide-react';

import { useToast } from '@/components/ui/use-toast';
import type { User } from '@/interfaces/user';

interface UserCardProps {
	user: User;
}

export function UserCard({ user }: UserCardProps) {
	const { toast } = useToast();

	return (
		<Card className="flex items-center p-1 md:p-3 min-h-20 gap-1 md:gap-3 flex-row shadow-none">
			<Avatar className="w-14 h-14 p-0">
				<AvatarFallback>{user.initials}</AvatarFallback>
			</Avatar>
			<div className="space-y-1 flex-1">
				<div className="flex items-start lg:items-center gap-1 lg:gap-2 flex-col lg:flex-row">
					<p className="text-red">{user.name}</p>
					<span className="text-sm text-muted-foreground flex items-center gap-1">
						<IconUser className="inline w-3" />
						{user.age} anos, {user.gender}
					</span>
				</div>
				<div className="text-sm text-muted-foreground flex gap-1 lg:gap-3 items-center flex-wrap">
					<span className="flex items-center gap-1">
						<Calendar className="inline w-3" /> {user.date} - {user.time}
					</span>
					<span className="flex items-center gap-1">
						<Clock3 className="inline w-3" /> {user.duration}
					</span>
					<span className="flex items-center gap-1">
						<Tag className="inline w-3" /> Usuário padrão
					</span>
				</div>
			</div>
			<div className="flex items-center gap-1 flex-col md:flex-row md:gap-3">
				<Badge
					className={`${user.status === 'Ativo' ? '' : 'text-muted-foreground'} px2.5 py-0.5 rounded-full text-xs font-semibold`}
					variant={user.status === 'Ativo' ? 'secondary' : 'outline'}
				>
					{user.status}
				</Badge>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="pixelboom-btn">
							<EllipsisVertical className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-32">
						<DropdownMenuItem
							onClick={() =>
								toast({ description: 'Você não tem permissão para editar.' })
							}
						>
							Editar
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() =>
								toast({ description: 'Você não tem permissão para excluir.' })
							}
						>
							Excluir
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</Card>
	);
}
