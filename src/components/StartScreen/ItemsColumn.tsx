import React from "react";
import { styled } from "styletron-react";
import musicalNote from "../../assets/81b.gif";
import blueEgg from "../../assets/36d.gif";
import redFeather from "../../assets/580.gif";
import goldFeather from "../../assets/6d1.gif";
import jiggy from "../../assets/80d.gif";
import mumboToken from "../../assets/41a.gif";

const ItemsContainer = styled("div", () => ({
	display: "flex",
	flexDirection: "column",
	margin: "0 150px 0 -120px"
}));

const StyledImg = styled("img", () => ({
	width: "130px",
	height: "130px",
	margin: "5px"
}));

const items = [
	{ src: musicalNote, alt: "Musical note" },
	{ src: blueEgg, alt: "Blue egg" },
	{ src: redFeather, alt: "Red feather" },
	{ src: goldFeather, alt: "Gold feather" },
	{ src: jiggy, alt: "Jiggy" },
	{ src: mumboToken, alt: "Mumbo token", style: { marginLeft: "80px" } }
];

const ItemsColumn = () => {
	return (
		<ItemsContainer>
			{items.map(({ src, alt, style }, index) => (
				<StyledImg key={index} src={src} alt={alt} style={style} />
			))}
		</ItemsContainer>
	);
};

export default ItemsColumn;
