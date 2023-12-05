import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
	return (
		<div>
			<nav className="nav">
				<div className="logo">
					<Link to="/">
						<img src={process.env.PUBLIC_URL + "/rabbit.png"} alt="rabbit" />
					</Link>
				</div>

				<div className="nav-content">
					<label for="check" className="checkbox">
						<FontAwesomeIcon icon="fa-solid fa-bars" />
					</label>
					<input type="checkbox" name="check" id="check" />
					<ul>
						<li>
							<NavLink
								to="/about"
								className={({ isActive, isPending }) =>
									isPending ? "" : isActive ? "active" : ""
								}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink to="/projects">Projects</NavLink>
						</li>
						<li>
							<NavLink to="/cv">Curriculum Vitae</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
