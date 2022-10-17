import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Helmet } from "react-helmet";

function User() {
    const [user, setUser] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users/${id}`)
            .then((response) => setUser(response.data.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <Helmet>
                <title>User</title>
            </Helmet>
            <>
                <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                />
                <h1>
                    {user.first_name}
                    {user.last_name}
                </h1>
                <p>{user.email}</p>
            </>
        </div>
    );
}

export default User;
