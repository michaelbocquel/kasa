export default function Rating(props) {
	const stars = [];
	for (let i = 0; i < props.count; i++) {
		stars.push(<img src="../src/assets/star-active.svg" key={i} className="accommodation__rating__star"></img>);
	}
	for (let i = 0; i < 5 - props.count; i++) {
		stars.push(<img src="../src/assets/star-inactive.svg" key={i + 5} className="accommodation__rating__star"></img>);
	}
	return (
		<div className="accommodation__rating__container" count={props.count}>
			{stars}
		</div>
	);
}
