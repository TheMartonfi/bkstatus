import React from "react";
import { styled } from "styletron-react";

const Container = styled("div", () => ({
	display: "flex",
	justifyContent: "center",
	backgroundColor: "black"
}));

const StartScreenCanvas = styled("div", () => ({
	width: "65.9%",
	height: "100vh",
	backgroundColor: "white"
}));

const App = () => {
	return (
		<Container>
			<StartScreenCanvas></StartScreenCanvas>
		</Container>
	);
};

export default App;
