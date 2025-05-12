import { Button } from '@/components/ui/button';
import {
	SheetClose,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { X } from 'lucide-react';

export function UserHandleHeader() {
	return (
		<SheetHeader className="flex flex-row items-center justify-between mb:2 md:mb-10 p-0">
			<SheetTitle className="font-serif text-xl md:text-2xl">
				Adicionar usuário
			</SheetTitle>
			<SheetDescription className="sr-only">
				Preencha os dados abaixo para cadastrar um novo usuário no sistema.
			</SheetDescription>
			<SheetClose asChild>
				<Button className="pixelboom-btn" variant="outline">
					<X />
				</Button>
			</SheetClose>
		</SheetHeader>
	);
}
