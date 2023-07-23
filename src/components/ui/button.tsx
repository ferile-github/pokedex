import { ButtonModel } from '@/interfaces/button';
import Link from 'next/link';

export default function Button(props: ButtonModel) {
	let className:string = 'btn btn-lg ';
	switch (props.style) {
		case 'primary':
			className+='btn-primary'
		break;
		case 'secondary':
			className+='btn-secondary'
		break;
		default:
			className+='btn-primary'
		break;
	}

	return (
		<Link href={props.link}>
			<button className={className}>{props.title}</button>
		</Link>
	)
}
