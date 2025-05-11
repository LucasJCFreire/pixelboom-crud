import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

interface DataItem {
	title: string;
	value: string | number;
}

interface Props {
	data: DataItem[];
}

export function Cards({ data }: Props) {
	return (
		<div className="flex flex-wrap gap-4 px-6 lg:px-6 justify-center">
			{data.map((item) => (
				<Card
					key={item.title}
					className="flex-1 min-w-[250px] max-w-[calc(50%-1rem)] lg:max-w-[calc(25%-1rem)] @container/card bg-primary-foreground border-0 shadow-none"
				>
					<CardHeader className="relative">
						<CardDescription className="text-xs">{item.title}</CardDescription>
						<CardTitle className="@[250px]/card:text-3xl text-2xl tabular-nums  font-normal font-serif">
							{item.value}
						</CardTitle>
					</CardHeader>
				</Card>
			))}
		</div>
	);
}
