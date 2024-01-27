const express = require("express")

const { register, LogIn} = require("../controllers/auth.js");



const router = express.Router();


router.post("/signUp" , register )


router.post("/signIn" , LogIn)


module.exports = router;