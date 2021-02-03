import React from "react";
import { styled } from "styletron-react";
import Row from "./Row";
import banjo from "../../assets/7ef.gif";
import jiggy from "../../assets/80d.gif";
import tooty from "../../assets/815.gif";

const StartScreenCanvas = styled("div", () => ({
	display: "flex",
	flexFlow: "column nowrap",
	justifyContent: "center",
	width: "65.9%",
	height: "100vh",
	backgroundColor: "white",
	fontFamily: "CCComicrazy-Regular",
	fontSize: "32px",
	fontWeight: "bold"
}));

const rows = [
	{ icon: { src: banjo, alt: "banjo" }, text: "RETURN TO GAME" },
	{ icon: { src: jiggy, alt: "jiggy" }, text: "VIEW TOTALS" },
	{ icon: { src: tooty, alt: "tooty" }, text: "SAVE AND QUIT" }
];

const StartScreen = () => {
	return (
		<StartScreenCanvas>
			{rows.map(({ icon, text }) => (
				<Row icon={icon} text={text} />
			))}
		</StartScreenCanvas>
	);
};

export default StartScreen;
