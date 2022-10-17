import React, { useEffect, useState } from "react";
import axios from "axios";
import location from "../../assets/images/place.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Places() {
	const [places, setPlaces] = useState([]);
	useEffect(() => {
		axios
			.get("https://traveller.talrop.works/api/v1/places")
			.then((response) => {
				setPlaces(response.data.data);
				console.log(response.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const renderPlaces = () => {
		return places.map((place) => (
			<Li key={place.id}>
				<Link to={`/places/view/${place.id}`} style={{ textDecoration: "none" }}>
					<ImageContainer>
						<PlaceImage src={place.image} alt={place.name} />
					</ImageContainer>
					<Bottom>
						<PlaceName>{place.name}</PlaceName>

						<Location style={{ color: "#000" }}>
							<Span>
								<LocationImg src={location} alt="Location" />
							</Span>
							{place.location}
						</Location>
					</Bottom>
				</Link>
			</Li>
		));
	};

	return (
		<Container>
			<Wrapper>
				<Heading>Welcome</Heading>
				<SubHeading>Explore the world around you</SubHeading>
				<Ul>{renderPlaces()}</Ul>
			</Wrapper>
		</Container>
	);
}

const Container = styled.section``;
const Wrapper = styled.section`
	width: 90%;
	margin: 0 auto;
	max-width: 1200px;
`;
const Heading = styled.h1`
	font-size: 40px;
	margin-bottom: 20px;
`;
const SubHeading = styled.h3`
	font-size: 20px;
	margin-bottom: 50px;
	color: #e1e1e1;
`;
const Ul = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;
const Li = styled.li`
	width: 23.5%;
	margin-bottom: 40px;
`;
const ImageContainer = styled.div`
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	overflow: hidden;
	margin-bottom: 10px;
`;
const PlaceImage = styled.img`
	width: 100%;
	display: block;
`;
const Bottom = styled.div``;
const PlaceName = styled.h2`
	color: #000;
	text-decoration: none;
	font-size: 20px;
	margin-left: 15px;
	margin-bottom: 5px;
`;
const Location = styled.p`
	margin-left: 15px;
`;
const Span = styled.span`
	display: inline-block;
	width: 13px;
	margin-right: 5px;
`;
const LocationImg = styled.img`
	width: 100%;
	display: block;
`;

export default Places;
