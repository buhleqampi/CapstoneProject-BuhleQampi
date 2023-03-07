// Importing Authentication  Middleware
require('dotenv').config();
const {sign, verify} = require('jsonwebtoken');

// Token
function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '2h'
    });
}

function verifyToken(req, res, next) {
    try{
        const token = req.cookies ["RegisteredUser"] !==null ? req.cookies["RegisteredUser"] :
        "Please sign up" ;
        const isValid = null;
        if(token !== "Please sign up"){
            isValid = verify(token, process.env.SECRET_KEY)
            if(isValid) {
                req.authenticated = true;
                next();
            }else {
                res.status(400).json( {err: "Please sign up"})
            }
        } else {
            request.status(200).json({ err:"Please sign up" });
        }
        } catch(e) {
            res.status(400).json({ err: e.message})
        }
        }
        module.exports = { createToken, verifyToken };