import React, { Fragment, useState, useEffect } from "react";
import InputRepo from "./InputRepo";
import ListRepos from "./ListRepos";

const Dashboard = ({setAuth}) => {

    const[inputs, setInputs] = useState({email:"", name:"", user_id:""});
    const {email, name, user_id} = inputs;

    async function getInfo() {
        try {
            const response = await fetch("http://localhost:5000/dashboard/", {
                method: "GET",
                headers: {jwt_token: localStorage.token }
            });
            
            const parseRes = await response.json();
            setInputs({...inputs, ["email"] : parseRes.email})
            setInputs({...inputs, ["name"] : parseRes.name})
            setInputs({...inputs, ["user_id"] : parseRes.user_id})
            console.log(parseRes)
            console.log("up")
        } catch (err) {
            console.error(err.message)
        }
    };

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    };
    useEffect(()=> {
        getInfo()
    }, []);
    return (
        <Fragment>
            <div className="container my-10">
                <span>Nombre: {name}</span><br/>
                <span>email: {email}</span><br/>
                <span>user_id: {user_id}</span><br/>
                <InputRepo />
                <ListRepos />
                <h1>{name}</h1>
            </div>
            <button className="btn btn-primary" onClick={e=>logout(e)}>
                Logout
            </button>
        </Fragment>
    );
};

export default Dashboard;