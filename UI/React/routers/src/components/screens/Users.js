import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

function Users() {
    const settings2 = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
    };
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // className: "center",
        // centerMode: true,
        // centerPadding: "60px",
        // slidesPerRow: 2,
    };

    const [users, setUsers] = useState([]);
    const SliderRef = useRef();

    useEffect(() => {
        axios
            .get("https://reqres.in/api/users")
            .then((response) => setUsers(response.data.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const renderUsers = () => {
        return users.map((user) => (
            <div key={user.id}>
                <Link to={`/user/${user.id}`}>
                    <img
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                    />
                    <h3>
                        {user.first_name} {user.last_name}
                    </h3>
                    <p>{user.email}</p>
                </Link>
            </div>
        ));
    };
    return (
        <div>
            <Helmet>
                <title>Users</title>
            </Helmet>
            <h1>Users</h1>
            <div className="container">
                <Slider ref={SliderRef} {...settings}>
                    {renderUsers()}
                </Slider>
                <div style={{ textAlign: "center", marginTop: "40px" }}>
                    <button
                        className="button"
                        onClick={() => SliderRef.current.slickPrev()}
                    >
                        Previous
                    </button>
                    <button
                        className="button"
                        onClick={() => SliderRef.current.slickNext()}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Users;
