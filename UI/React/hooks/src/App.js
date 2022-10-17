import React from "react";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";
import BreadCrumps from "./Components/screens/BreadCrumps";

export const UserContext = React.createContext();
export const EmailContext = React.createContext();

function App() {
    return (
        <div className="App">
            {/* <UserContext.Provider value="Junaid Hisham">
                <EmailContext.Provider value="user@example.com">
                    <ComponentA />
                    <ComponentB />
                    <ComponentC />
                </EmailContext.Provider>
            </UserContext.Provider> */}
            <BreadCrumps />
        </div>
    );
}

export default App;
