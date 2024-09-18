import { FC, ReactNode } from 'react';

import { Checkbox } from '@/components/ui';

export interface IFilterCheckboxProps {
	name: string;
	endAdornment?: ReactNode;
	onCheckedChange?: (checked: boolean) => void;
	checked?: boolean;
}

export const FilterCheckbox: FC<IFilterCheckboxProps> = ({
	name,
	endAdornment,
	onCheckedChange,
	checked,
}) => {
	return (
		<div className="flex items-center space-x-2 select-none">
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={name}
				className="rounded-[8px] w-6 h-6"
				id={`checkbox-${String(name)}`}
			/>
			<label
				htmlFor={`checkbox-${String(name)}`}
				className="leading-none cursor-pointer flex-1"
			>
				{name}
			</label>
			{endAdornment}
		</div>
	);
};
