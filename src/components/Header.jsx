import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header className="header">
				<img src="./header-logo.svg" alt="" className="header__logo" />
				<nav className="header__nav">
					<NavLink to="/" className="header__nav__link">
						Accueil
					</NavLink>
					<NavLink to="/about" className="header__nav__link">
						A propos
					</NavLink>
				</nav>
			</header>
		</>
	);
}
