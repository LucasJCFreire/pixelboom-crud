import { Button } from '@/components/ui/button';
import { useUserHandleStore } from '@/lib/store';
import { Plus } from 'lucide-react';
import type { ReactElement } from 'react';

export function Title(): ReactElement {
	const { open } = useUserHandleStore();
	return (
		<div className="flex justify-between min-h-[60px] mb-5 p-4">
			<h1 className="font-serif text-3xl">Usuários</h1>
			<div>
				<Button
					className="h-10 cursor-pointer w-28.5 px-3 py-2 rounded-full text-sm font-semibold bg-[#102822]"
					onClick={open}
				>
					<Plus />
					<span>Adicionar</span>
				</Button>
			</div>
		</div>
	);
}
