export default function Collapse(props) {
  return (
    <details className="collapse__details">
      <summary className="collapse__summary">{props.summary}</summary>
			{props.details}
    </details>
  );
}