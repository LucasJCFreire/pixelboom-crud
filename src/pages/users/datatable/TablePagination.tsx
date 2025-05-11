import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface TablePaginationProps {
	pageIndex: number;
	pageSize: number;
	totalItems: number;
	onPageChange: (pageIndex: number) => void;
	onPageSizeChange: (pageSize: number) => void;
}

export function TablePagination({
	pageIndex,
	pageSize,
	totalItems,
	onPageChange,
	onPageSizeChange,
}: TablePaginationProps) {
	const totalPages = Math.ceil(totalItems / pageSize);

	const renderPageNumbers = () => {
		const pages = [];
		const current = pageIndex + 1;
		const delta = 1;

		const range = [];
		const rangeWithDots = [];
		let l: number | null = null;

		for (let i = 1; i <= totalPages; i++) {
			if (
				i === 1 ||
				i === totalPages ||
				(i >= current - delta && i <= current + delta)
			) {
				range.push(i);
			}
		}

		for (const i of range) {
			if (l !== null) {
				if (i - l === 2) {
					rangeWithDots.push(l + 1);
				} else if (i - l > 2) {
					rangeWithDots.push('...');
				}
			}
			rangeWithDots.push(i);
			l = i;
		}
		return rangeWithDots.map((page) => {
			if (page === '...') {
				return (
					<PaginationItem key={`ellipsis-${page}`}>
						<PaginationEllipsis />
					</PaginationItem>
				);
			}

			const pageNum = page as number;
			return (
				<PaginationItem key={`page-${pageNum}`}>
					<PaginationLink
						className="cursor-pointer font-medium"
						isActive={pageNum === current}
						onClick={() => onPageChange(pageNum - 1)}
					>
						{pageNum}
					</PaginationLink>
				</PaginationItem>
			);
		});
	};

	const startIndex = pageIndex * pageSize;
	const endIndex = Math.min(startIndex + pageSize, totalItems);

	return (
		<div className="flex items-center justify-between pt-1 flex-col lg:flex-row gap-2">
			<div className="text-sm text-muted-foreground">
				{/* Opcao mais detalhada mas diferente do design*/}
				{/* {startIndex + 1} - {endIndex} de {totalItems} itens  */}
				{endIndex} de {totalItems} itens
			</div>
			<Pagination className="w-auto">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							onClick={() => onPageChange(Math.max(0, pageIndex - 1))}
							className={`${pageIndex === 0 ? 'font-medium text-foreground/50 hover:text-foreground/50 hover:cursor-not-allowed' : ''} cursor-pointer`}
						/>
					</PaginationItem>

					{renderPageNumbers()}

					<PaginationItem>
						<PaginationNext
							onClick={() =>
								onPageChange(Math.min(totalPages - 1, pageIndex + 1))
							}
							className={`${pageIndex === totalPages - 1 ? 'font-medium text-foreground/50 hover:text-foreground/50 hover:cursor-not-allowed' : ''} cursor-pointer`}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			<div className="flex items-center gap-2">
				<span className="text-sm text-muted-foreground">Itens por página</span>
				<Select
					value={`${pageSize}`}
					onValueChange={(value) => {
						onPageSizeChange(Number(value));
						onPageChange(0); // reset to first page
					}}
				>
					<SelectTrigger className="w-20 cursor-pointer">
						<SelectValue placeholder={`${pageSize}`} />
					</SelectTrigger>
					<SelectContent>
						<SelectItem className="cursor-pointer" value="6">
							6
						</SelectItem>
						<SelectItem className="cursor-pointer" value="12">
							12
						</SelectItem>
						<SelectItem className="cursor-pointer" value="24">
							24
						</SelectItem>
						<SelectItem className="cursor-pointer" value="48">
							48
						</SelectItem>
						<SelectItem className="cursor-pointer" value="96">
							96
						</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
