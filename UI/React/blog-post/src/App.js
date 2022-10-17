import "./App.css";
import Nav from "./components/screens/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./components/screens/Blogs";
import Blog from "./components/screens/Blog";
function App() {
    return (
        <Router>
            <>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Blogs />} />
                    <Route path="/blog/article/:id" element={<Blog />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
