import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@radix-ui/react-label';
import { FormField } from './FormField';
import { UserHandleStatus } from './UserHandleStatus';

export function UserHandleForm() {
	return (
		<div className="flex flex-col gap-3.5 md:gap-5">
			<FormField id="name" label="Nome Completo" placeholder="Digite o nome" />
			<FormField id="email" label="Email" placeholder="Digite o e-mail" />
			<div>
				<FormField id="tel" label="Telefone" placeholder="Digite o telefone" />
				<div className="flex flex-row items-center gap-2 mt-2">
					<Checkbox id="whatsapp" />
					<Label htmlFor="whatsapp" className="text-sm font-medium">
						WhatsApp
					</Label>
				</div>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
				<FormField id="cpf" label="CPF" placeholder="Digite o CPF" />
				<FormField id="rg" label="RG" placeholder="Digite o RG" />
			</div>
			<UserHandleStatus />
		</div>
	);
}
