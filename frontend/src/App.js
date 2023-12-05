// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/styles/root.css";

import About from "./components/About";
import Landing from "./components/Landing";
import NavBar from "./utils/NavBar";
import Footer from "./utils/Footer";

// library.add(fas, faTwitter, faFontAwesome);

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<NavBar />

					<Routes>
						<Route exact path="/" element={<Landing />} />
						<Route path="/about" element={<About />} />
					</Routes>

					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
