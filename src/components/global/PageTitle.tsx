interface Props {
	title : string,
}

export default function PageTitle (props: Props) {
  return (

		<header className="page-header mb-xl">
			<h1 className="page-title / mb-0 text-center">
			{props.title}
			</h1>
		</header>

  );
}
