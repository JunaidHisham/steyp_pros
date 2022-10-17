import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/screens/About";
import Contact from "./components/screens/Contact";
import Home from "./components/screens/Home";
import Nav from "./components/screens/Includes/Nav";
import Users from "./components/screens/Users";
import User from "./components/screens/User";

function App() {

    return (
        <Router>
            <>
                <Nav />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" exact element={<About />} />
                    <Route path="/contact" exact element={<Contact />} />
                    <Route path="/users" exact element={<Users />} />
                    <Route path="/user/:id" exact element={<User />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
