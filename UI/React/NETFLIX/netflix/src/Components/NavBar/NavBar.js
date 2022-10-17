import React from "react";
import "./NavBar.css";
function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-left">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                    alt="Netflix Logo"
                />
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">TV Shows</a>
                    </li>
                    <li>
                        <a href="#">Movies</a>
                    </li>
                    <li>
                        <a href="#">Recently Added</a>
                    </li>
                    <li>
                        <a href="#">My List</a>
                    </li>
                </ul>
            </div>

            <img
                className="avatar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Prifile"
            />
        </div>
    );
}

export default NavBar;
