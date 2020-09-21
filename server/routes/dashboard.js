const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

router.get("/", authorize, async (req, res) => {
  try {    
    const user = await pool.query(
      "SELECT name, email, user_id FROM users WHERE user_id = $1",
      [req.user.id] 
    ); 
    const {code} = req.query.code
    req.json(code)
    //res.json(user.rows[0]);
  } catch (err) { 
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;