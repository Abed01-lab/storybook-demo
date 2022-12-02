import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./stories/button/Button";

function App() {
	return (
		<div className="grid place-items-center h-screen">
			<Button label="Click me!" size="base" type="secundary" onClick={() => console.log("Button clicked")} />
		</div>
	);
}

export default App;
