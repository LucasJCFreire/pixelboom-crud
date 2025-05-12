import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormFieldProps {
	id: string;
	label: string;
	placeholder: string;
	type?: string;
}

export function FormField({
	id,
	label,
	placeholder,
	type = 'text',
}: FormFieldProps) {
	return (
		<div className="w-full">
			<Label
				htmlFor={id}
				className="text-right text-sm font-medium mb-1 md:mb-2"
			>
				{label}
			</Label>
			<Input id={id} placeholder={placeholder} type={type} />
		</div>
	);
}
