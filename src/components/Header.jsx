import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<img
			srcSet="/assets/header-logo-small.svg 146w, /assets/header-logo.svg 211w"
			sizes="(max-width: 600px) 146px, 211px"
				src="/assets/header-logo.svg"
				alt="Red Kasa logo on white background"
				className="header__logo"
			/>
			<nav className="header__nav">
				<NavLink to="/" className="header__nav__link">
					Accueil
				</NavLink>
				<NavLink to="/about" className="header__nav__link">
					A propos
				</NavLink>
			</nav>
		</header>
	);
}
