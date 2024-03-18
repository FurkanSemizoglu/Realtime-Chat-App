import { sendMessage } from "../controllers/messageController.js";

const express = require("express");


const router = express.Router();

router.post("/send/:id" , sendMessage)


export default router;