import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";
import locationImg from "../../assets/images/place.svg";

function Place() {
    const [place, setPlace] = useState([]);
    const [gallery, setGallery] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
            .then((response) => {
                setPlace(response.data.data);
                console.log(response.data.data);
                setGallery(response.data.data.gallery);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const renderGallery = () => {
        return gallery.map((p) => (
            <Li key={p.id}>
                <ListImage src={p.image} />
            </Li>
        ));
    };

    return (
        <div>
            <Helmet>
                <title>{`Place | ${place.name}`}</title>
            </Helmet>
            <Wrapper>
                <Container>
                    <Heading>
                        <PlaceName>{place.name}</PlaceName>
                        <Div>
                            <Catogery>{place.category_name}</Catogery>
                            <LocationName>
                                <Locationimage src={locationImg} />
                                {place.location}
                            </LocationName>
                        </Div>
                    </Heading>
                    <ImagePortion>
                        <LeftImage>
                            <MainImage src={place.image} alt="Image" />
                        </LeftImage>
                        <RightImage>
                            <Ul>{renderGallery()}</Ul>
                        </RightImage>
                    </ImagePortion>
                    <ContentPortion>
                        <PlaceDetails>Place Details</PlaceDetails>
                        <Description>{place.description}</Description>
                    </ContentPortion>
                </Container>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
`;
const Container = styled.section`
    padding: 0 50px;
`;
const Heading = styled.div`
    margin-bottom: 15px;
`;
const PlaceName = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
`;
const Div = styled.div`
    display: flex;
`
const Catogery = styled.span`
    display: inline-block;
    padding: 5px 10px;
    color: #aeaeae;
    border: 1px solid #aeaeae;
    border-radius: 15px;
    margin-right: 15px;
`;
const LocationName = styled.span`
    display: flex;
    align-items: center;
`;
const Locationimage = styled.img`
    width: 15px;
    margin-right: 5px;
`;
const ImagePortion = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;
const LeftImage = styled.div`
    width: 49%;
`;
const RightImage = styled.div`
    width: 49%;
`;
const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;
`;
const Li = styled.li`
    width: 48%;
    overflow: hidden;
    margin-bottom: 20px;
    &:nth-child(2) {
        border-top-right-radius: 10px;
    }
    &:nth-child(4) {
        border-bottom-right-radius: 10px;
    }
`;
const ListImage = styled.img`
    width: 100%;
    display: block;
`;
const MainImage = styled.img`
    width: 100%;
    border-top-left-radius: 15px;
`;
const ContentPortion = styled.div``;
const PlaceDetails = styled.h5`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
`
const Description = styled.p`
    font-size: 18px;
    line-height: 1.5;
`
export default Place;
