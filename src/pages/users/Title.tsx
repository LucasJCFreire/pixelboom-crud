import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import type { ReactElement } from 'react';

export function Title(): ReactElement {
	return (
		<div className="flex justify-between min-h-[60px]  mb-5">
			<h1 className="font-serif text-3xl">Usuários</h1>
			<Button className="h-10 cursor-pointer w-28.5 px-3 py-2 rounded-full text-sm font-semibold bg-[#102822]">
				<Plus />
				<span>Adicionar</span>
			</Button>
		</div>
	);
}
