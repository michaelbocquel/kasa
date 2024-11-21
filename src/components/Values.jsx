import Collapse from "./Collapse";

export default function Values() {
	return (
		<div className="values__container">
			<Collapse
				summary="Fiabilité"
				details="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
				classSummary="collapse__summary"
				classDetails="collapse__details"
			/>
			<Collapse
				summary="Respect"
				details="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
					comportement discriminatoire ou de perturbation du voisinage
					entraînera une exclusion de notre plateforme."
				classSummary="collapse__summary"
				classDetails="collapse__details"
			/>
			<Collapse
				summary="Service"
				details="La qualité du service est au cœur de notre engagement chez Kasa. Nous
					veillons à ce que chaque interaction, que ce soit avec nos hôtes ou
					nos locataires, soit empreinte de respect et de bienveillance."
				classSummary="collapse__summary"
				classDetails="collapse__details"
			/>
			<Collapse
				summary="Sécurité"
				details="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
					pour les voyageurs, chaque logement correspond aux critères de
					sécurité établis par nos services. En laissant une note aussi bien à
					l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
					standards sont bien respectés. Nous organisons également des ateliers
					sur la sécurité domestique pour nos hôtes."
				classSummary="collapse__summary"
				classDetails="collapse__details"
			/>
		</div>
	);
}
