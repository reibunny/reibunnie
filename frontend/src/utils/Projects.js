import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/projects.scss";
import { Link } from "react-router-dom";

export default function Projects() {
	const URL = "http://localhost:1338/api/";
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const TOKEN = process.env.REACT_APP_STRAPI_API_TOKEN;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${URL}projects`, {
					headers: {
						Authorization: `bearer ${TOKEN}`, // Replace with your actual API key
					},
				});
				setData(response.data);
				console.log(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				// Set loading to false regardless of success or failure
				setLoading(false);
			}
		};

		fetchData();
	}, [TOKEN]);

	return (
		<div className="projects content">
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="cards">
					{data.data.map((item) => (
						<div className="card" key={item.id}>
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
