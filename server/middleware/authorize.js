const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = async(req, res, next) => {
    try {
        const token = req.header("jwt_token");
        if (!token) {
            return res.status(403).json({ msg: "authorization denied" });
        }

        const payload = jwt.verify(token, process.env.jwtSecret);

        req.user = payload.user;
        next();
    } catch (err) {
        console.error(error.message);
        return res.status(401).json({ msg: "Not authorized" });
    }

};