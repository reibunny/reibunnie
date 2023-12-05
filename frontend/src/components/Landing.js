import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import "../styles/landing.scss";
import cascaImage from "../assets/casca.jpg";
import Projects from "../utils/Projects";

export default function Landing() {
	return (
		<>
			<div className="landing content">
				<div className="card">
					<div className="picture">
						<img src={cascaImage} alt="casca" />
					</div>
					<div className="text">
						<div className="above">
							<span>HELLO, I'M</span>
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
						<div className="socials">
							<div className="social">
								<a
									href="https://github.com/reibunny"
									target="_blank"
									rel="noopener noreferrer">
									<FontAwesomeIcon icon={faGithubAlt} />
								</a>
							</div>
							<div className="social">
								<a
									href="https://www.linkedin.com/in/alyson-rezaire"
									target="_blank"
									rel="noopener noreferrer">
									<FontAwesomeIcon icon={faLinkedinIn} />
								</a>
							</div>
							<div className="social">
								<a href="/" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faEnvelope} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="projects">
				<div className="block">
					<p>My latest projects...</p>
					<Projects />
				</div>
			</div>
		</>
	);
}
