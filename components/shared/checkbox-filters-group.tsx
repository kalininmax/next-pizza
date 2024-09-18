'use client';

import { ChangeEvent, FC, useState } from 'react';

import { FilterCheckbox, IFilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui/input';

interface IProps {
	title: string;
	items: IFilterCheckboxProps[];
	limit?: number;
	searchInputPlaceholder?: string;
	className?: string;
	onChange?: (values: string[]) => void;
	defaultValue?: string[];
}

export const CheckboxFiltersGroup: FC<IProps> = ({
	title,
	items,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	// onChange,
	// defaultValue,
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

	return (
		<div className={className}>
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
						onCheckedChange={(value) => console.log(value)}
						checked={false}
						name={item.name}
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
