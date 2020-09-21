import React, {Fragment, useEffect, useState} from "react";
import EditRepo from "./EditRepo";

const ListRepos = () => {
    const [repos, setRepos] = useState([]);
    const {email} = set;
    const getGithub = async id => {
        try {
            const deletedRepo = await fetch('https://github.com/login/oauth/authorize'+id, {
                method: "GET",
                params: {redirect_uri: "http://localhost:5000/dashboard",
                        login: email}
            });
            setRepos(repos.filter(repo => repo.repository_id !== id));
        } catch (err) {
            console.error(err.message);
        }

    };
    async function getInfo() {
        try {
            const response = await fetch("http://localhost:5000/dashboard/", {
                method: "GET",
                header: {jwt_token: localStorage.token }
            });

            const parseRes = await response.json();
            console.log(parseRes);
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(()=> {
        getInfo()
    });
    
    return( 
    <Fragment>

    </Fragment>

    );
};

export default ListRepos;