import React, {Fragment, useEffect, useState} from "react";
import EditRepo from "./EditRepo";

const ListRepos = () => {
    const [repos, setRepos] = useState([]);

    const deleteRepo = async id => {
        try {
            const deletedRepo = await fetch('http://localhost:5000/repositories/'+id, {
                method: "DELETE"
            });
            console.log(deletedRepo);
            setRepos(repos.filter(repo => repo.repository_id !== id));
        } catch (err) {
            console.error(err.message);
        }

    };
/*
    const listMyRepos = async() => {
        try {
            const response = await fetch("https://github.com/login/oauth/access_token",{
                method: "POST",
                headers: ""
            });
            const jsonData = await response.json()
            
            setRepos(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    };
*/
    const getRepos = async() => {
        try {
            const response = await fetch("http://localhost:5000/repositories")
            const jsonData = await response.json()
            
            setRepos(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    };
    useEffect(()=>{
        getRepos();
    }, []);

    return( 
    <Fragment>
        <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>URL</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {repos.map(repo => (
                <tr key={repo.repository_id}>
                    <td>{repo.repository_id}</td>
                    <td>{repo.name}</td>
                    <td>{repo.description}</td>
                    <td>{repo.url}</td>
                    <td><EditRepo repo={repo} /></td>
                    <td><button className="btn btn-danger" onClick={() => deleteRepo(repo.repository_id)} >Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </Fragment>

    );
};

export default ListRepos;