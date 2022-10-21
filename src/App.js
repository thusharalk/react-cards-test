import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter as Router, } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Container>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Container>
		</Router>
	);
}

export default App;
