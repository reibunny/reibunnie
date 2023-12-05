import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
	return (
		<div className="landing content">
			<div className="text">
				<div className="above">
					<span>HELLO I'M</span>
				</div>
				<div className="middle">Reibunnie</div>
				<div className="below">
					A passionate Software Engineering student @
					<Link
						to="https://www.efrei.fr"
						target="_blank"
						rel="noopener noreferrer">
						Efrei
					</Link>
				</div>
			</div>
		</div>
	);
}
