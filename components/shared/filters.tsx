'use client';

import { FC, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input, RangeSlider } from '../ui';
import qs from 'qs';

import { Title } from '@/components/shared';

interface IProps {
	className?: string;
}

interface IPrice {
	from?: number;
	to?: number;
}

const Price = {
	MIN: 0,
	MAX: 2000,
	STEP: 10,
};

export const Filters: FC<IProps> = ({ className }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [price, setPrice] = useState<IPrice>({
		from: Number(searchParams.get('priceFrom')) || Price.MIN,
		to: Number(searchParams.get('priceTo')) || Price.MAX,
	});

	const updatePrice = (key: keyof IPrice, value: number) => {
		setPrice({
			...price,
			[key]: value,
		});
	};

	useEffect(() => {
		const filters = {
			priceFrom: price.from === Price.MIN ? undefined : price.from,
			priceTo: price.to === Price.MAX ? undefined : price.to,
		};

		router.push(`?${qs.stringify(filters)}`, { scroll: false });
	}, [price, router]);

	return (
		<aside className={className}>
			<Title text="Фитрация" size="sm" className="mb-5" />

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена:</p>
				<div className="flex items-center gap-3 mb-5">
					от
					<Input
						type="number"
						placeholder={String(Price.MIN)}
						min={Price.MIN}
						max={Price.MAX - Price.STEP}
						value={String(price.from)}
						onChange={(evt) => updatePrice('from', Number(evt.target.value))}
					/>
					до
					<Input
						type="number"
						placeholder={String(Price.MAX)}
						min={Price.MIN + Price.STEP}
						max={Price.MAX}
						value={String(price.to)}
						onChange={(evt) => updatePrice('to', Number(evt.target.value))}
					/>
				</div>
				<RangeSlider
					min={Price.MIN}
					max={Price.MAX}
					step={Price.STEP}
					value={[price.from || Price.MIN, price.to || Price.MAX]}
					onValueChange={([from, to]) => {
						const priceFrom =
							from > Price.MAX - Price.STEP ? from - Price.STEP : from;
						const priceTo = to < Price.MIN + Price.STEP ? Price.STEP : to;

						setPrice({ from: priceFrom, to: priceTo });
					}}
				/>
			</div>
		</aside>
	);
};
