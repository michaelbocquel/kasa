export default function Collapse(props) {
	return (
		<details className={props.class}>
			<summary className="collapse__summary">{props.summary}</summary>
			{props.details}
		</details>
	);
}
