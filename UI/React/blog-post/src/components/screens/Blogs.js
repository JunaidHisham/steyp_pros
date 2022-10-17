import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get("https://traveller.talrop.works/api/v1/blog/")
            .then((response) => {
                setBlogs(response.data.data);
                console.log(response.data.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <Container>
            <Wrapper>
                <Heading>Blog Posts</Heading>
                {blogs.map((e) => (
                    <Blog key={e.id}>
                        <Link to={`blog/article/${e.id}`}>
                            <Div>
                                <Profile>
                                    <ProfileImage
                                        src={e.author.image}
                                        alt="Alpine Hackathon"
                                    />
                                </Profile>
                            </Div>
                            <Name>{e.author.name}</Name>
                            <PostDate>
                                A guest post by <A href="#">meskio</A> on{" "}
                                {e.posted_date}
                                {e.date}
                            </PostDate>
                            <Description>{e.description}</Description>
                            <Button>Read more...</Button>
                        </Link>
                    </Blog>
                ))}
            </Wrapper>
        </Container>
    );
}

const Container = styled.section`
    background-color: #f7f7f7;
    min-height: 100vh;
    padding: 60px 0;
`;
const Wrapper = styled.section`
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
`;
const Heading = styled.h1`
    font-size: 45px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 100px;
`;
const Blog = styled.div`
    width: 60%;
    margin: 0 auto 100px;
    background: #fff;
    border: 1px solid #dedede;
    padding: 0 100px 100px;
    &:last-child {
        margin-bottom: 0;
    }
`;
const Div = styled.div`
    display: flex;
    justify-content: center;
`;
const Profile = styled.div`
    width: 90px;
    height: 90px;
    position: relative;
`;
const ProfileImage = styled.img`
    width: 100%;
    display: block;
    position: absolute;
    top: -45px;
    border-radius: 50%;
`;
const Name = styled.h5`
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
`;
const PostDate = styled.p`
    text-align: center;
    margin-bottom: 40px;
`;
const A = styled.a`
    color: #3475dc;
`;
const Description = styled.p`
    margin-bottom: 30px;
    height: 200px;
    overflow: hidden;
`;
const Button = styled.button`
    color: #3475dc;
    cursor: pointer;
`;
export default Blogs;
