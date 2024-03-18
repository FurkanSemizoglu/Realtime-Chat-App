const {jwt} = require('jsonwebtoken')
const User = require('../models/user.js')

const protectRoute = async (req,res,next) => {


    try {
        const token = req.cookies.jwt

        if(!token){
            return res.status(401).json({error : "There is no token!!! "})
        }
        
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(!decoded){
            return res.status(401).json({error : "Invalid  token!!! "})
        }

        const user = await User.findById(decoded.userId);

        if(!user){
            return res.status(401).json({error : "There is no user!!! "})
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("error in middleware protext route : " , error.message)
        return res.status(500).json({
            error : "Internal server error"
        })
    }
} 

module.exports = protectRoute;