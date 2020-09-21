import React, { Fragment, useState } from "react";

const EditRepo = ({repo}) => {
    const [name, setName] = useState(repo.name);
    const [description, setDescription] = useState(repo.description);
    const [url, setUrl] = useState(repo.url);
    
    const resetValues = function () { 
        setDescription(repo.description); 
        setName(repo.name);
        setUrl(repo.url);
    };

    const updateRepo = async(e) =>{
        e.preventDefault();
        try {
            const body = {name, description, url};
            const response = await fetch(`http://localhost:5000/repositories/${repo.repository_id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
            });
            console.log(response)
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };
    return(
        <Fragment>
            <button 
                type="button" 
                className="btn btn-info btn-lg" 
                data-toggle="modal" 
                data-target={`#id${repo.repository_id}`}
                onClick={resetValues}
            >
                Edit
            </button>
            <div id={`id${repo.repository_id}`} className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Edit Repository</h4>
                        <button
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            onClick={resetValues}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Name</p>
                        <input type="text" className="form-control" onChange={e=> setName(e.target.value)} value={name}/>
                    </div>
                    <div className="modal-body">
                        <p>Description</p>
                        <input type="text" className="form-control" onChange={e=> setDescription(e.target.value)} value={description}/>
                    </div>
                    <div className="modal-body">
                        <p>Url</p>
                        <input type="text" className="form-control" onChange={e=> setUrl(e.target.value)} value={url}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateRepo(e)}>
                            Update
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            data-dismiss="modal" 
                            onClick={resetValues}
                        >
                            Close
                        </button>
                    </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default EditRepo;