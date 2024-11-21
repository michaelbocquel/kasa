export default function Collapse(props) {
	return (
		<details className={props.classDetails}>
			<summary className={props.classSummary}>{props.summary}</summary>
			{props.details}
		</details>
	);
}
