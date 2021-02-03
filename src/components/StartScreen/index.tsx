import React from "react";
import { styled } from "styletron-react";
import Rows from "./Rows";
import ItemsColumn from "./ItemsColumn";

const StartScreenCanvas = styled("div", () => ({
	display: "flex",
	flexFlow: "row nowrap",
	alignItems: "center",
	width: "65.9%",
	height: "100vh",
	backgroundColor: "white",
	fontFamily: "CCComicrazy-Regular",
	fontSize: "38px",
	fontWeight: "bold"
}));

const StartScreen = () => {
	return (
		<StartScreenCanvas>
			<div style={{ display: "flex", flexFlow: "column wrap" }}>
				<div>hello</div>
				<Rows />
				<div>hello</div>
			</div>
			<ItemsColumn />
		</StartScreenCanvas>
	);
};

export default StartScreen;
