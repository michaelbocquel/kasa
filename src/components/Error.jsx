import { Link } from "react-router-dom";

export default function Error() {
	return (
		<div className="error__display">
			<p className="error__display__title">404</p>
			<p className="error__display__text">
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link to="/" className="error__display__home__link">
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
}
