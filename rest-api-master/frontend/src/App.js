import "./App.css";
import MainRoute from "./MainRoute";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const UserContext = React.createContext();
function App() {
	const [userData, setUserData] = useState({});
	const updateUserData = (action) => {
		switch (action.type) {
			case "LOGOUT":
				setUserData(null);
				localStorage.clear();
				break;
            case "LOGIN":
                setUserData(action.payload)
            default:
                break;
		}
	};
	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("user_data")));
	}, []);
	return (
		<>
			<UserContext.Provider value={{ userData, updateUserData }}>
				<Router>
					<MainRoute />
				</Router>
			</UserContext.Provider>
		</>
	);
}

export default App;
