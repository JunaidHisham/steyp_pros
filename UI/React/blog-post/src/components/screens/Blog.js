import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router";

function Blog() {
    const [blog, setBlog] = useState([]);
    const [image, setImage] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`https://traveller.talrop.works/api/v1/blog/article/${id}`)
            .then((response) => {
                setBlog(response.data.data);
                setImage(response.data.data.author);
                console.log(response.data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <BlogContainer>
                <ImageBox>
                    <ProfileImage>
                        <Profile src={image.image} alt={image.name} />
                    </ProfileImage>
                </ImageBox>
                <BloggerName>{image.name}</BloggerName>
                <PostDate>
                    <A href="#">meskio</A> on {blog.posted_date}
                </PostDate>
                <Description>{blog.description}</Description>
            </BlogContainer>
        </Container>
    );
}

const Container = styled.section`
    background-color: #f7f7f7;
    min-height: 100vh;
    padding: 60px 0;
`;
const BlogContainer = styled.section`
    width: 60%;
    margin: 0 auto;
`;
const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;
const ProfileImage = styled.section`
    width: 100px;
    height: 100px;
`;
const Profile = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
`;
const BloggerName = styled.h5`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
`;
const PostDate = styled.p`
    text-align: center;
    margin-bottom: 40px;
`;
const A = styled.a`
    color: #3475dc;
`;
const Description = styled.p`
    line-height: 2;
`;
export default Blog;
