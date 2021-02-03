import React from "react";
import { styled } from "styletron-react";
import TextRows from "./TextRows";
import ItemsColumn from "./ItemsColumn";

const StartScreenContainer = styled("div", () => ({
	display: "flex",
	flexFlow: "row nowrap",
	alignItems: "center",
	width: "65.9%",
	height: "100vh",
	backgroundColor: "white"
}));

const RowsContainer = styled("div", () => ({
	display: "flex",
	flexFlow: "column wrap",
	width: "100%"
}));

const StartScreen = () => {
	return (
		<StartScreenContainer>
			<RowsContainer>
				<TextRows />
			</RowsContainer>
			<ItemsColumn />
		</StartScreenContainer>
	);
};

export default StartScreen;
