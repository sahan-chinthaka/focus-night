import "./nav-bar.scss";

function NavBar() {
	return (
		<div className="navigation-bar">
			<img className="logo" src="./focus-night-logo.png" alt="Focus Night Logo" />
			<nav className="links">
				<ul>
					<li>
						<a href="#" className="active">
							HOME
						</a>
					</li>
					<li>
						<a href="#">NOTICE</a>
					</li>
					<li>
						<a href="#">CONTACT</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
