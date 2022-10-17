import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/screens/Nav";
import Places from "./components/screens/Places";
import Place from "./components/screens/Place";

function App() {
    return (
        <Router>
            <>
                <Nav />
                <Routes>
                    <Route path="/" exact element={<Places />} />
                    <Route path="/places/view/:id" exact element={<Place />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
