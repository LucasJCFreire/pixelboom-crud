import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserHandleStatus } from './UserHandleStatus';

export function UserHandleForm() {
	return (
		<div className="flex flex-col gap-3.5 md:gap-5">
			<div>
				<Label
					htmlFor="name"
					className="text-right text-sm font-medium mb-1 md:mb-2"
				>
					Nome Completo
				</Label>
				<Input id="name" placeholder="Digite o nome" />
			</div>

			<div>
				<Label
					htmlFor="email"
					className="text-right text-sm font-medium mb-1 md:mb-2"
				>
					Email
				</Label>
				<Input id="email" placeholder="Digite o e-mail" />
			</div>
			<div>
				<Label
					htmlFor="tel"
					className="text-right text-sm font-medium mb-1 md:mb-2"
				>
					Telefone
				</Label>
				<Input id="tel" placeholder="Digite o telefone" />
				<div className="flex flex-row items-center gap-2 mt-2">
					<Checkbox id="whatsapp" />
					<Label htmlFor="whatsapp" className="text-sm font-medium">
						WhatsApp
					</Label>
				</div>
			</div>

			<div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
				<div className="w-full">
					<Label
						htmlFor="cpf"
						className="text-right text-sm font-medium mb-1 md:mb-2"
					>
						CPF
					</Label>
					<Input id="cpf" placeholder="Digite o CPF" />
				</div>
				<div className="w-full">
					<Label
						htmlFor="rg"
						className="text-right text-sm font-medium mb-1 md:mb-2"
					>
						RG
					</Label>
					<Input id="rg" placeholder="Digite o RG" />
				</div>
			</div>

			<UserHandleStatus />
		</div>
	);
}
