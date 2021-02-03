import React from "react";
import { styled } from "styletron-react";
import StartScreen from "./components/StartScreen";

const Container = styled("div", () => ({
	display: "flex",
	justifyContent: "center",
	backgroundColor: "black"
}));

const App = () => {
	return (
		<Container>
			<StartScreen />
		</Container>
	);
};

export default App;
