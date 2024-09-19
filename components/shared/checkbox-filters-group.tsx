'use client';

import { ChangeEvent, FC, useState } from 'react';

import { FilterCheckbox, IFilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui/input';
import { Skeleton } from '../ui';
import { cn } from '../../lib/utils';

interface IProps {
	title: string;
	items: IFilterCheckboxProps[];
	limit?: number;
	searchInputPlaceholder?: string;
	className?: string;
	loading?: boolean;
	onChange?: (value: string) => void;
	selected?: Set<string>;
}

export const CheckboxFiltersGroup: FC<IProps> = ({
	title,
	items,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	loading,
	onChange,
	selected,
}) => {
	const [showAll, setShowAll] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const list = showAll
		? items.filter(({ name }) =>
				name.toLowerCase().includes(searchValue.toLowerCase())
		  )
		: items.slice(0, limit);

	const onSearchInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(evt.target.value);
	};

	if (loading) {
		return (
			<div className={cn('w-60', className)}>
				<p className="font-bold mb-3">{title}</p>

				{Array.from({ length: limit }).map((_, index) => (
					<Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
				))}
				<Skeleton className="w-28 h-6 rounded-[8px]" />
			</div>
		);
	}

	return (
		<div className={cn('w-60', className)}>
			<p className="font-bold mb-3">{title}</p>

			{showAll && (
				<div className="mb-5">
					<Input
						className="bg-gray-50 border-none"
						placeholder={searchInputPlaceholder}
						value={searchValue}
						onChange={onSearchInputChange}
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						name={item.name}
						checked={selected?.has(item.name)}
						onCheckedChange={(name) => onChange?.(name)}
						endAdornment={item.endAdornment}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						onClick={() => setShowAll((prev) => !prev)}
						className="text-primary mt-3"
					>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	);
};
