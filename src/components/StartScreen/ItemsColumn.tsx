import React from "react";
import { styled } from "styletron-react";
import musicalNote from "assets/81b.gif";
import blueEgg from "assets/36d.gif";
import redFeather from "assets/580.gif";
import goldFeather from "assets/6d1.gif";
import jiggy from "assets/80d.gif";
import mumboToken from "assets/41a.gif";

const ItemsContainer = styled("div", () => ({
	display: "flex",
	flexDirection: "column",
	margin: "0 150px 0 auto"
}));

const ItemContainer = styled("div", () => ({
	display: "flex",
	alignItems: "center"
}));

const StyledImg = styled("img", () => ({
	width: "130px",
	height: "130px",
	margin: "10px 0"
}));

const items = [
	{
		icon: { src: musicalNote, alt: "Musical note" },
		text: "0"
	},
	{
		icon: { src: blueEgg, alt: "Blue egg" },
		text: "0",
		iconStyle: { margin: "0px 0 0 30px" },
		textStyle: { margin: "0 0 0 -30px" }
	},
	{
		icon: { src: redFeather, alt: "Red feather" },
		text: "0"
	},
	{
		icon: { src: goldFeather, alt: "Gold feather" },
		text: "0"
	},
	{
		icon: { src: jiggy, alt: "Jiggy" },
		text: "0"
	},
	{
		icon: { src: mumboToken, alt: "Mumbo token" },
		text: "0",
		iconStyle: { marginLeft: "80px" },
		textStyle: { marginLeft: "30px" }
	}
];

const ItemsColumn = () => {
	return (
		<ItemsContainer>
			{items.map(
				({ icon: { src, alt }, text, iconStyle, textStyle }, index) => (
					<ItemContainer>
						<StyledImg key={index} src={src} alt={alt} style={iconStyle} />
						<div style={textStyle}>{text}</div>
					</ItemContainer>
				)
			)}
		</ItemsContainer>
	);
};

export default ItemsColumn;
