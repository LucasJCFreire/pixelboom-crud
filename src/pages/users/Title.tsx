import { UserHandle } from '@/components/layout/Form/userHandle';
import type { ReactElement } from 'react';

export function Title(): ReactElement {
	return (
		<div className="flex justify-between min-h-[60px] mb-5 p-4">
			<h1 className="font-serif text-3xl">Usuários</h1>
			<UserHandle />
		</div>
	);
}
