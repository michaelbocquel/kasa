export default function Collapse(props) {
	return (
		<div className="collapse">
			<details className={props.classDetails}>
				<summary className={props.classSummary}>{props.summary}</summary>
			</details>
			<div className="collapse__details__div">
				<p className="collapse__details__text">{props.details}</p>
			</div>
		</div>
	);
}
