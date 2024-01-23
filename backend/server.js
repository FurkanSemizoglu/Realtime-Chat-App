const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(cors()); 

const PORT = process.env.PORT || 5000

app.get("/" , (req,res) => {
    res.send("Server is running")
})

app.listen(PORT ,() => {
    console.log("server is running")
})