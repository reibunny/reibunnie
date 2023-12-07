import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/projects.scss";
import { Link } from "react-router-dom";

export default function Projects({ projectsCount }) {
	const URL = "http://localhost:1338/api/";
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const TOKEN = process.env.REACT_APP_STRAPI_API_TOKEN;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${URL}projects?populate=*`, {
					headers: {
						Authorization: `Bearer ${TOKEN}`,
					},
				});

				const sortedData = await response.data.sort(
					(a, b) =>
						new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
				);

				setData(sortedData);

				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [TOKEN, data]);

	return (
		<div className="projects content">
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="cards">
					{data.data.slice(0, projectsCount).map((item) => (
						<div
							className="card"
							key={item.id}
							style={{
								backgroundImage:
									"url(http://localhost:1338" +
									`${item.attributes.displayImage.data.attributes.url}` +
									")",
								backgroundSize: "contain",
							}}>
							<h3>{item.attributes.title}</h3>
							<p>{item.attributes.description}</p>
							<Link to={`/projects/${item.attributes.url}`}>
								<button>View case study</button>
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
