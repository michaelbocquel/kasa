export default function Collapse(props) {
	return (
		<details className={props.classDetails}>
			<summary className={props.classSummary}>{props.summary}</summary>
			<div>{props.details}</div>
		</details>
	);
}
