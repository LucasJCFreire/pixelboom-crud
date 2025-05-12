import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

export function UserHandleStatus() {
	const [isActive, setIsActive] = useState(true);

	return (
		<div className="bg-[#fafafa] p-2 md:p-4 rounded-md border border-border flex items-center justify-between gap-2">
			<div>
				<p className="text-sm font-medium mb-1 md:mb-2">Status</p>
				<p className="text-xs text-muted-foreground">
					Defina se o usuário estará ativo ao ser adicionado
				</p>
			</div>
			<div className="flex items-center gap-2">
				<Switch checked={isActive} onCheckedChange={setIsActive} />
				<p className="text-sm font-medium">{isActive ? 'Ativo' : 'Inativo'}</p>
			</div>
		</div>
	);
}
