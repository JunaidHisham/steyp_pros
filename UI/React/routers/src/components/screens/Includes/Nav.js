import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Nav() {
    return (
        <>
            <Header>
                <Logo>Logo</Logo>
                <NavList>
                    <ListItems>
                        <Link to="/">Home</Link>
                    </ListItems>
                    <ListItems>
                        <Link to="/about">About</Link>
                    </ListItems>
                    <ListItems>
                        <Link to="/contact">Contact</Link>
                    </ListItems>
                    <ListItems>
                        <Link to="/users">Users</Link>
                    </ListItems>
                </NavList>
            </Header>
        </>
    );
}
const Header = styled.div`
    background-color: #a89a99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    color: #fff;
`;
const Logo = styled.h1`
    width: 120px;
`;
const NavList = styled.ul`
    display: flex;
    list-style: none;
`;
const ListItems = styled.li`
    margin-right: 30px;
    &:last-child {
        margin-right: 0;
    }
`;
export default Nav;
