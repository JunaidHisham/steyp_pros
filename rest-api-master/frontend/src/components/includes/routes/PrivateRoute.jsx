import React, { useState } from 'react'
import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute({children, ...rest}) {
    const [userData, setUserData] = useState({})

    useEffect(()=> {
        let data = JSON.parse(localStorage.getItem("user_data"))
        setUserData(data)
    }, [])

    console.log("userData: ",userData);
    return(
        userData ? <Outlet />:<Navigate to={"/user/login"} />
    )
}

export default PrivateRoute