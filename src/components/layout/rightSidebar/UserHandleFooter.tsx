import { Button } from '@/components/ui/button';
import { SheetClose, SheetFooter } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';

export function UserHandleFooter() {
	const { toast } = useToast();

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
				<Button
					className="rounded-full w-28.5 text-sm font-semibold bg-[#202822]"
					onClick={() =>
						toast({ description: 'Usuário adicionado com sucesso!' })
					}
				>
					Adicionar
				</Button>
			</SheetClose>
		</SheetFooter>
	);
}
