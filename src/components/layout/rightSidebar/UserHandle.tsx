import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useState } from 'react';
import { UserHandleFooter } from './UserHandleFooter';
import { UserHandleForm } from './UserHandleForm';
import { UserHandleHeader } from './UserHandleHeader';

type Props = {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
};

export function UserHandle({ isOpen, onOpenChange }: Props) {
	type CustomFormData = {
		name: string;
		email: string;
		tel: string;
		cpf: string;
		rg: string;
	};

	const [formData, setFormData] = useState<CustomFormData>({
		name: '',
		email: '',
		tel: '',
		cpf: '',
		rg: '',
	});

	return (
		<Sheet open={isOpen} onOpenChange={onOpenChange}>
			<SheetContent className="min-w-[275px] sm:min-w-[600px] p-2.5 md:p-10">
				<UserHandleHeader />
				<UserHandleForm formData={formData} setFormData={setFormData} />
				<UserHandleFooter name={formData.name} />
			</SheetContent>
		</Sheet>
	);
}
