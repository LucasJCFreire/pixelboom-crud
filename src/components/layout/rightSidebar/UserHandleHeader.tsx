import { Button } from '@/components/ui/button';
import {
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { X } from 'lucide-react';

export function UserHandleHeader({ onClose }: { onClose: () => void }) {
	return (
		<SheetHeader className="flex flex-row items-center justify-between mb:2 md:mb-10 p-0">
			<SheetTitle className="font-serif text-xl md:text-2xl">
				Adicionar usuário
			</SheetTitle>
			<SheetDescription className="sr-only">
				Preencha os dados abaixo para cadastrar um novo usuário no sistema.
			</SheetDescription>
			<Button className="pixelboom-btn" variant="outline" onClick={onClose}>
				<X />
			</Button>
		</SheetHeader>
	);
}
