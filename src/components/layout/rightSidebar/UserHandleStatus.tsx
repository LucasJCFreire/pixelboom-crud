import { Switch } from '@/components/ui/switch';

type Props = {
	status: 'Ativo' | 'Inativo';
	setStatus: (status: 'Ativo' | 'Inativo') => void;
};

export function UserHandleStatus({ status, setStatus }: Props) {
	return (
		<div className="bg-[#fafafa] p-2 md:p-4 rounded-md border border-border flex items-center justify-between gap-2">
			<div>
				<p className="text-sm font-medium mb-1 md:mb-2">Status</p>
				<p className="text-xs text-muted-foreground">
					Defina se o usuário estará ativo ao ser adicionado
				</p>
			</div>
			<div className="flex items-center gap-2">
				<Switch
					checked={status === 'Ativo'}
					onCheckedChange={(checked) =>
						setStatus(checked ? 'Ativo' : 'Inativo')
					}
				/>
				<p className="text-sm font-medium">{status}</p>
			</div>
		</div>
	);
}
