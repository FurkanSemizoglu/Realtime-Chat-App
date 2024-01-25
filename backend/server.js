const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const dbConnect = require("./config/dbConnect.js")

dotenv.config();

const app = express();

app.use(cors()); 

app.use(bodyParser.urlencoded({limit:"30mb" , extended: "true"}));
app.use(bodyParser.json({limit:"30mb" , extended:"true"}));

const PORT = process.env.PORT || 5000

app.get("/" , (req,res) => {
    res.send("Server is running")
})



app.listen(PORT ,async() => {


    try {
        await dbConnect;

        console.log("Connected to DB and server is runnning")

    } catch (error) {
        console.log("error : " , error);
    }
})