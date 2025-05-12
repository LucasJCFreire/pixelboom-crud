import { Button } from '@/components/ui/button';
import { SheetClose, SheetFooter } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';
import { useRef } from 'react';

interface UserHandleFooterProps {
	name: string;
}

export function UserHandleFooter({ name }: UserHandleFooterProps) {
	const { toast } = useToast();
	const closeRef = useRef<HTMLButtonElement>(null);

	const handleAdd = () => {
		if (!name.trim()) {
			toast({
				variant: 'destructive',
				description: 'Por favor, informe o nome do usuário.',
			});
			return;
		}

		toast({ description: 'Usuário adicionado com sucesso!' });
		closeRef.current?.click(); // Fecha o Sheet manualmente
	};

	return (
		<SheetFooter className="flex justify-center md:justify-end gap-3 flex-row">
			<SheetClose asChild>
				<Button
					variant="outline"
					className="rounded-full w-28.5 text-sm font-semibold"
				>
					Cancelar
				</Button>
			</SheetClose>

			<SheetClose asChild>
				<button type="button" hidden ref={closeRef} />
			</SheetClose>

			<Button
				className="rounded-full w-28.5 text-sm font-semibold bg-[#202822]"
				onClick={handleAdd}
			>
				Adicionar
			</Button>
		</SheetFooter>
	);
}
