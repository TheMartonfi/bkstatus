import React from "react";
import { styled } from "styletron-react";
import banjo from "assets/7ef.gif";
import jiggy from "assets/80d.gif";
import tooty from "assets/815.gif";

const TextRowContainer = styled("div", () => ({
	display: "flex",
	alignItems: "center",
	width: "93%",
	height: "95px",
	color: "white",
	margin: "0px 0 32px 50px",
	borderRadius: "30px",
	backgroundColor: "rgba(0, 0, 0, .6)",
	":hover": {
		cursor: "pointer"
	},
	":hover div": {
		color: "snow"
	}
}));

const StyledText = styled("div", () => ({
	marginTop: "10px",
	fontFamily: "CCComicrazy-Regular",
	fontSize: "38px",
	fontWeight: "bold",
	textShadow: "none",
	color: "rgba(255, 250, 250, .7)"
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
		<>
			{rows.map(({ icon: { src, alt }, text }, index) => (
				<TextRowContainer key={index}>
					<StyledImg src={src} alt={alt} />
					<StyledText>{text}</StyledText>
				</TextRowContainer>
			))}
		</>
	);
};

export default Rows;
