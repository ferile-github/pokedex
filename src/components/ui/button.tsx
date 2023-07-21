import { ButtonModel } from '@/interfaces/button';
import Link from 'next/link';

export default function Button(props: ButtonModel) {
	let classname:string = 'btn ';
	switch (props.style) {
		case 'primary':
			classname+='btn-primary'
		break;
		case 'secondary':
			classname+='btn-secondary'
		break;
		default:
			classname+='btn-primary'
		break;
	}


	return (
		<Link href={props.link}>
			<button className={classname}>{props.title}</button>
		</Link>
	)
}
