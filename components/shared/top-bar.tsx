import { FC } from 'react';

import { cn } from '@/lib/utils';
import { Container, Categories, SortPopup } from '@/components/shared';

interface IProps {
	className?: string;
}

export const TopBar: FC<IProps> = ({ className }) => {
	return (
		<div
			className={cn(
				'sticky top-0 z-10 bg-white shadow-lg shadow-black/5',
				className
			)}
		>
			<Container className="flex gap-x-4 flex-wrap items-center justify-between ">
				<Categories />
				<SortPopup className="hidden mb-5" />
			</Container>
		</div>
	);
};
