import { Button } from '@/components/ui/button';
import type { ReactElement } from 'react';

export function Home(): ReactElement {
	return (
		<div>
			<h1 className="text-2xl text-red-600">Home</h1>
			<Button>Button</Button>
		</div>
	);
}
