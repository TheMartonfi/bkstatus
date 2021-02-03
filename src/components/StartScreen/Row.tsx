import React from "react";
import { styled } from "styletron-react";

interface RowProps {
	icon: {
		src: string;
		alt: string;
	};
	text: string;
}

const RowContainer = styled("div", () => ({
	display: "flex",
	alignItems: "center",
	width: "50%",
	height: "80px",
	color: "white",
	margin: "0px 0 32px 50px",
	borderRadius: "30px",
	backgroundColor: "rgba(0, 0, 0, .6)"
}));

const TextContainer = styled("div", () => ({
	marginTop: "9px"
}));

const StyledImg = styled("img", () => ({
	width: "60px",
	height: "60px",
	margin: "0 10px"
}));

const Row = ({ icon: { src, alt }, text }: RowProps) => {
	return (
		<RowContainer>
			<StyledImg src={src} alt={alt} />
			<TextContainer>{text}</TextContainer>
		</RowContainer>
	);
};

export default Row;
