import Collapse from "./Collapse";
import faq from "../data/faq.json";

export default function Values() {
	return (
		<div className="values__container">
			{faq.map((item) => (
				<Collapse
					summary={item.summary}
					details={item.details}
					classSummary="collapse__summary"
					classDetails="collapse__details"
					key={item.summary}
				></Collapse>
			))}
		</div>
	);
}
