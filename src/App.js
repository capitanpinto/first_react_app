import React, {Fragment} from "react";
//import "./App.css";

//components
import InputRepo from "./components/InputRepo";
import ListRepos from "./components/ListRepos";

function App() {
    return (

        <Fragment>
            <div className="container">
                <InputRepo />
                <ListRepos />
            </div>
        </Fragment>
    );
}
export default App;