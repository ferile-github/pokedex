import Image from 'next/image';
import spinner from '@/public/ball-triangle.svg';

export default function Loading() {
	return (
		<div className="flex justify-center h-[400px]">
			<Image src={spinner} alt='Loading' />
		</div>
	);
}
