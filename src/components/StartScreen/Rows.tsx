import React from "react";
import { styled } from "styletron-react";
import banjo from "assets/7ef.gif";
import jiggy from "assets/80d.gif";
import tooty from "assets/815.gif";

const RowsContainer = styled("div", () => ({
	display: "flex",
	flexFlow: "column nowrap",
	width: "100%"
}));

const RowContainer = styled("div", () => ({
	display: "flex",
	alignItems: "center",
	width: "80%",
	height: "95px",
	color: "white",
	margin: "0px 0 32px 50px",
	borderRadius: "30px",
	backgroundColor: "rgba(0, 0, 0, .6)"
}));

const TextContainer = styled("div", () => ({
	marginTop: "9px"
}));

const StyledImg = styled("img", () => ({
	width: "90px",
	height: "90px",
	margin: "0 10px"
}));

const rows = [
	{ icon: { src: banjo, alt: "Banjo" }, text: "RETURN TO GAME" },
	{ icon: { src: jiggy, alt: "Jiggy" }, text: "VIEW TOTALS" },
	{ icon: { src: tooty, alt: "Tooty" }, text: "SAVE AND QUIT" }
];

const Rows = () => {
	return (
		<RowsContainer>
			{rows.map(({ icon: { src, alt }, text }, index) => (
				<RowContainer key={index}>
					<StyledImg key={src} src={src} alt={alt} />
					<TextContainer key={text}>{text}</TextContainer>
				</RowContainer>
			))}
		</RowsContainer>
	);
};

export default Rows;
