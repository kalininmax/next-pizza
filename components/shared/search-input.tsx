'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { Product } from '@prisma/client';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Api } from '@/services/api';

interface IProps {
	className?: string;
}

export const SearchInput: FC<IProps> = ({ className }) => {
	const wrapRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const [focused, setFocused] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState<Product[]>([]);

	const resetSearch = () => {
		setSearchQuery('');
		setFocused(false);
		inputRef.current?.blur();
	};

	useEffect(() => {
		window.addEventListener('keydown', (evt) => {
			if (evt.key === 'Escape') {
				resetSearch();
			}
		});
	}, []);

	useDebounce(
		() =>
			Api.products
				.search(searchQuery)
				.then((items) => setSearchResults(items))
				.catch((err) => {
					setSearchResults([]);
					console.error(err);
				}),
		300,
		[searchQuery]
	);

	useClickAway(wrapRef, () => {
		resetSearch();
	});

	return (
		<>
			<div
				className={cn(
					'fixed inset-0 bg-black/50 z-20 invisible opacity-0 transition-opacity duration-300',
					focused && 'visible opacity-100'
				)}
			></div>
			<div ref={wrapRef} className="relative">
				<label
					className={cn(
						'flex rounded-2xl flex-1 justify-between relative h-11 z-20',
						className
					)}
				>
					<Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400 pointer-events-none" />
					<input
						ref={inputRef}
						className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
						type="text"
						placeholder="Поиск"
						value={searchQuery}
						onFocus={() => setFocused(true)}
						onInput={(evt) => setSearchQuery(evt.currentTarget.value)}
					/>
				</label>

				{!!searchResults.length && (
					<div
						className={cn(
							'absolute w-full overflow-auto bg-white rounded-2xl py-2 top-14 shadow-md transsition-all duration-200 invisible opacity-0 z-20',
							focused && 'visible opacity-100 top-12'
						)}
					>
						{searchResults.map((product) => (
							<Link
								key={product.id}
								className="flex gap-2 items-center px-3 py-2 hover:bg-primary/10"
								href={`/products/${product.id}`}
								onClick={() => setFocused(false)}
							>
								<Image
									className="object-contain w-[50px] h-[50px]"
									src={product.imageUrl}
									width={50}
									height={50}
									alt=""
								/>
								{product.name}
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	);
};
