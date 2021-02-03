import React from "react";
import { styled } from "styletron-react";

const StartScreenCanvas = styled("div", () => ({
	width: "65.9%",
	height: "100vh",
	backgroundColor: "white"
}));

const StartScreen = () => {
	return <StartScreenCanvas />;
};

export default StartScreen;
