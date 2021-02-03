import React from "react";
import { styled } from "styletron-react";

const StartScreenCanvas = styled("div", () => ({
	width: "65.9%",
	height: "100vh",
	backgroundColor: "white",
	fontFamily: "CCComicrazy-Regular",
	fontSize: "32px",
	fontWeight: "bold"
}));

const StartScreen = () => {
	return <StartScreenCanvas>RETURN TO GAME</StartScreenCanvas>;
};

export default StartScreen;
