import React from "react";
import { Link } from "react-router-dom";

import "../styles/footer.scss";

export default function Footer() {
	return (
		<div className="footer content">
			<div className="above">Let's work together !</div>
			<div className="middle">
				<img src={process.env.PUBLIC_URL + "/rabbit.png"} alt="rabbit" />
			</div>
			<div className="below">
				<Link to="/">alyson.rezaire.pro@outlook.fr</Link>
			</div>
		</div>
	);
}
