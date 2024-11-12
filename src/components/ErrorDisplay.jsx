export default function ErrorDisplay() {
	return (
		<div className="error__display">
			<p className="error__display__title">404</p>
			<p className="error__display__text">Oups! La page que vous demandez n'existe pas.</p>
			<a href="/" className="error__display__home__link">Retourner sur la page d'accueil</a>
		</div>
	);
}
