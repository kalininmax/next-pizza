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
				'sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5',
				className
			)}
		>
			<Container className="flex items-center justify-between ">
				<Categories />
				<SortPopup />
			</Container>
		</div>
	);
};
