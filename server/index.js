const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
//midleware
app.use(cors());
app.use(express.json());

//Routes

//register and login

app.use("/auth", require("./routes/jwtAuth"));

//dashboard

app.use("/dashboard", require("./routes/dashboard"))

//create
app.post("/repositories", async(req, res)=>{
    try{
        const {name, description, url} = req.body;
        const newRepository = await pool.query("INSERT INTO repositories (name, description, url) VALUES($1, $2, $3) RETURNING *", [name, description, url]);
        res.json(newRepository.rows[0]);
        console.log(req.body);
    } catch (err){
        console.error(err.message);
    }
})
// index

app.get("/repositories", async(req, res)=>{

    try{
            const repos = await pool.query("SELECT * FROM repositories");

        res.json(repos.rows);
    } catch (err){
        console.error(err.message);
    }
})

// show

app.get("/repositories/:id", async(req, res)=>{
    try{
        console.log(req.params);
        const id = req.params["id"];
        const repo = await pool.query("SELECT * FROM repositories WHERE repository_id = $1", [id]);
        if (repo.rows.length == 0) {
            res.json("Not found");
        } else {
            res.json(repo.rows[0]);
        }
    } catch (err){
        console.error(err.message);
    }
})

// update

app.put("/repositories/:id", async(req, res)=>{
    try {
        console.log(req.params, req.body)
        const id = req.params["id"];
        const {name} = req.body;
        const {description} = req.body;
        const {url} = req.body;
        const updateRepos = await pool.query("UPDATE repositories SET name = $1, description =$2, url = $3 WHERE repository_id = $4", [name, description, url, id]);
        res.json("updated")
    } catch (err) {
        console.error(err.message);
    }
})

// delete

app.delete("/repositories/:id", async(req, res)=>{
    try{
        console.log("delete request");
        const id = req.params["id"];
        const deleteRepo = await pool.query("DELETE FROM repositories WHERE repository_id = $1", [id]);
        res.json("Deleted todo");
    } catch (err){
        console.error(err.message);
    }
})

//SERVER
app.listen(5000, () => {
    console.log('server has started on port 5000');
});
