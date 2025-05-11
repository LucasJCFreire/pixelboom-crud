import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import type { CardItem } from '@/interfaces/user';

interface Props {
	dataCard: CardItem[];
}

export function Cards({ dataCard }: Props) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-4 lg:px-6">
			{dataCard.map((item) => (
				<Card
					key={item.title}
					className="flex-1 min-w-[200px] @container/card bg-primary-foreground border-0 shadow-none"
				>
					<CardHeader className="relative">
						<CardDescription className="text-xs">{item.title}</CardDescription>
						<CardTitle className="@[200px]/card:text-3xl text-2xl tabular-nums  font-normal font-serif">
							{item.value}
						</CardTitle>
					</CardHeader>
				</Card>
			))}
		</div>
	);
}
