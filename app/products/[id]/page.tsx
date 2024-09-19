import { Container, Title } from '@/components/shared';

export default function ProductPage({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<>
			<Container className="mt-5">
				<Title text={`Продукт ${id}`} size="2xl" />
			</Container>
		</>
	);
}
