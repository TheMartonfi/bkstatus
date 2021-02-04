import React from "react";
import { styled } from "styletron-react";
import StartScreen from "components/StartScreen";

const Container = styled("div", () => ({
	display: "flex",
	justifyContent: "center",
	backgroundColor: "black",
	fontFamily: "Lithographer",
	fontSize: "78px",
	color: "#71d2f2",
	textShadow: "2px 2px 3px black"
}));

const App = () => {
	return (
		<Container>
			<StartScreen />
		</Container>
	);
};

export default App;
