import { Button } from '@/components/ui/button';
import { SheetFooter } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';
import type { FormData } from '@/interfaces/form';
import { useUserStore } from '@/store/store';

interface UserHandleFooterProps {
	name: string;
	status: FormData['status'];
	onClose?: () => void;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}
export function UserHandleFooter({
	name,
	status,
	onClose,
	setFormData,
}: UserHandleFooterProps) {
	const { toast } = useToast();
	const addUser = useUserStore((state) => state.addUser);

	const handleAdd = () => {
		if (!name.trim()) {
			toast({
				variant: 'destructive',
				description:
					"O campo 'Nome Completo' é obrigatório para adicionar um usuário.",
			});
			return;
		}

		addUser({ name, status });

		setFormData({
			name: '',
			email: '',
			tel: '',
			cpf: '',
			rg: '',
			status: 'Ativo',
		});

		toast({ description: 'Usuário adicionado com sucesso!' });

		onClose?.();
	};

	return (
		<SheetFooter className="flex justify-center md:justify-end gap-3 flex-row">
			<Button
				variant="outline"
				className="rounded-full w-28.5 text-sm font-semibold"
				onClick={onClose}
			>
				Cancelar
			</Button>

			<Button
				className="rounded-full w-28.5 text-sm font-semibold bg-[#202822]"
				onClick={handleAdd}
			>
				Adicionar
			</Button>
		</SheetFooter>
	);
}
