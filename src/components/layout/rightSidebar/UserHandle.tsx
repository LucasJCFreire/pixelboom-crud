import { Sheet, SheetContent } from '@/components/ui/sheet';
import { UserHandleFooter } from './UserHandleFooter';
import { UserHandleForm } from './UserHandleForm';
import { UserHandleHeader } from './UserHandleHeader';

type Props = {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
};

export function UserHandle({ isOpen, onOpenChange }: Props) {
	return (
		<Sheet open={isOpen} onOpenChange={onOpenChange}>
			<SheetContent className="min-w-[275px] sm:min-w-[600px] p-2.5 md:p-10">
				<UserHandleHeader />
				<UserHandleForm />
				<UserHandleFooter />
			</SheetContent>
		</Sheet>
	);
}
