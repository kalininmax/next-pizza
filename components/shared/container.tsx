import React from 'react';

import { cn } from '@/lib/utils';

interface IProps {
	className?: string;
}

export const Container: React.FC<React.PropsWithChildren<IProps>> = ({
	className,
	children,
}) => {
	return (
		<div className={cn('mx-auto px-4 max-w-[1280px]', className)}>
			{children}
		</div>
	);
};
