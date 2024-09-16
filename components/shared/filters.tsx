import { FC } from 'react';

import {
	CheckboxFiltersGroup,
	FilterCheckbox,
	Title,
} from '@/components/shared';
import { Input, RangeSlider } from '../ui';

import { INGREDIENTS } from '@/mocks/filters';

interface IProps {
	className?: string;
}

export const Filters: FC<IProps> = ({ className }) => {
	return (
		<aside className={className}>
			<Title text="Фитрация" size="sm" className="mb-5 font-bold" />

			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Можно собирать" value="1" />
				<FilterCheckbox text="Новинки" value="2" />
			</div>

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input
						type="number"
						placeholder="0"
						min={0}
						max={30000}
						defaultValue={0}
					/>
					<Input
						type="number"
						min={100}
						max={3000}
						defaultValue={1000}
						placeholder="3000"
					/>
				</div>
				<RangeSlider min={0} max={3000} step={10} value={[0, 1000]} />
			</div>

			<CheckboxFiltersGroup
				className="mt-5"
				title="Ингредиенты"
				items={INGREDIENTS}
				limit={5}
			/>
		</aside>
	);
};
