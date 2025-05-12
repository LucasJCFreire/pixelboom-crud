import { Checkbox } from '@/components/ui/checkbox';
import type { FormData } from '@/interfaces/form';
import { Label } from '@radix-ui/react-label';
import { FormField } from './FormField';
import { UserHandleStatus } from './UserHandleStatus';

interface Props {
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export function UserHandleForm({ formData, setFormData }: Props) {
	return (
		<div className="flex flex-col gap-3.5 md:gap-5">
			<FormField
				id="name"
				label="Nome Completo"
				placeholder="Digite o nome"
				value={formData.name}
				onChange={(e) =>
					setFormData((prev) => ({ ...prev, name: e.target.value }))
				}
			/>
			<FormField
				id="email"
				label="Email"
				placeholder="Digite o e-mail"
				value={formData.email}
				onChange={(e) =>
					setFormData((prev) => ({ ...prev, email: e.target.value }))
				}
			/>
			<div>
				<FormField
					id="tel"
					label="Telefone"
					placeholder="Digite o telefone"
					value={formData.tel}
					onChange={(e) =>
						setFormData((prev) => ({ ...prev, tel: e.target.value }))
					}
				/>
				<div className="flex flex-row items-center gap-2 mt-2">
					<Checkbox id="whatsapp" />
					<Label htmlFor="whatsapp" className="text-sm font-medium">
						WhatsApp
					</Label>
				</div>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
				<FormField
					id="cpf"
					label="CPF"
					placeholder="Digite o CPF"
					value={formData.cpf}
					onChange={(e) =>
						setFormData((prev) => ({ ...prev, cpf: e.target.value }))
					}
				/>
				<FormField
					id="rg"
					label="RG"
					placeholder="Digite o RG"
					value={formData.rg}
					onChange={(e) =>
						setFormData((prev) => ({ ...prev, rg: e.target.value }))
					}
				/>
			</div>
			<UserHandleStatus
				status={formData.status}
				setStatus={(status) => setFormData((prev) => ({ ...prev, status }))}
			/>
		</div>
	);
}
