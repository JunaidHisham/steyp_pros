import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://reqres.in/api/users")
            .then(function (response) {
                // handle success
                setUsers(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    let renderItems = () => {
        return users.map((user) => (
            <div key={user.id}>
                <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                />
                <h1>
                    Name : {user.first_name} {user.last_name}
                </h1>
                <a href={`mail:${user.email}`}>{user.email}</a>
            </div> 
        ));
    };

    return <div>{renderItems()}</div>;
}

export default Users;
