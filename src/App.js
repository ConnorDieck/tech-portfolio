import "./App.css";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./util/NavBar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const theme = createTheme({
	palette : {
		type      : "light",
		primary   : {
			main : "#3b3b3b"
		},
		secondary : {
			main : "#f500b1"
		}
	}
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
