import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { User } from '@/interfaces/user';
import { ListFilter, Search } from 'lucide-react';
import { useState } from 'react';
import { TablePagination } from './TablePagination';
import { UserCard } from './UserCard';

interface Props {
	users: User[];
}

export function DataTable({ users }: Props) {
	const [pageIndex, setPageIndex] = useState(0);
	const [pageSize, setPageSize] = useState(6);

	const startIndex = pageIndex * pageSize;
	const endIndex = startIndex + pageSize;
	const paginatedUsers = users.slice(startIndex, endIndex);

	return (
		<div className="space-y-4 p-4">
			<div className="relative flex items-center space-x-2">
				<Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
				<Input type="text" placeholder="Buscar..." className="pl-10" />
				<Button variant="outline" className="pixelboom-btn">
					<ListFilter className="h-4 w-4" />
				</Button>
			</div>

			{paginatedUsers.map((user) => (
				<UserCard key={user.id} user={user} />
			))}

			<TablePagination
				pageIndex={pageIndex}
				pageSize={pageSize}
				totalItems={users.length}
				onPageChange={setPageIndex}
				onPageSizeChange={setPageSize}
			/>
		</div>
	);
}
