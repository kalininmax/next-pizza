import React from 'react';

import { FilterCheckbox, Title } from '@/components/shared';

interface IProps {
	className?: string;
}

export const Filters: React.FC<IProps> = ({ className }) => {
	return (
		<aside className={className}>
			<Title text="Фитрация" size="sm" className="mb-5 font-bold" />

			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Можно собирать" value="1" />
				<FilterCheckbox text="Новинки" value="2" />
			</div>
		</aside>
	);
};
