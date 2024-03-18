const { sendMessage} = require("../controllers/messageController.js");
const express = require("express");


const router = express.Router();

router.post("/send/:id" , sendMessage)


module.exports = router;