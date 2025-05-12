import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { X } from 'lucide-react';
import { useState } from 'react';

type Props = {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
};

export function UserHandle({ isOpen, onOpenChange }: Props) {
	const [isActive, setIsActive] = useState(true);
	const { toast } = useToast();

	return (
		<Sheet open={isOpen} onOpenChange={onOpenChange}>
			<SheetContent className="min-w-[275px] sm:min-w-[600px] p-2.5 md:p-10">
				<SheetHeader className="flex flex-row items-center justify-between mb:2 md:mb-10 p-0">
					<SheetTitle className="font-serif text-xl md:text-2xl">
						Adicionar usuário
					</SheetTitle>
					<SheetClose asChild>
						<Button
							className="rounded-full h-10 w-10 cursor-pointer"
							variant="outline"
						>
							<X />
						</Button>
					</SheetClose>
				</SheetHeader>

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
					<div className="bg-[#fafafa] p-2 md:p-4 rounded-md border border-border flex items-center justify-between gap-2">
						<div>
							<p className="text-sm font-medium mb-1 md:mb-2">Status</p>
							<p className="text-xs text-muted-foreground">
								Defina se o usuário estará ativo ao ser adicionado
							</p>
						</div>
						<div className="flex items-center gap-2">
							<Switch checked={isActive} onCheckedChange={setIsActive} />
							<p className="text-sm font-medium">
								{isActive ? 'Ativo' : 'Inativo'}
							</p>
						</div>
					</div>
				</div>

				<SheetFooter className="flex justify-center md:justify-end gap-3 flex-row">
					<SheetClose asChild>
						<Button
							variant="outline"
							className="h-10 cursor-pointer w-28.5 px-3 py-2 rounded-full text-sm font-semibold"
						>
							Cancelar
						</Button>
					</SheetClose>
					<SheetClose asChild>
						<Button
							type="submit"
							className="h-10 cursor-pointer w-28.5 px-3 py-2 rounded-full text-sm font-semibold bg-[#202822]"
							onClick={() =>
								toast({ description: 'Usuário adicionado com sucesso!' })
							}
						>
							Adicionar
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
