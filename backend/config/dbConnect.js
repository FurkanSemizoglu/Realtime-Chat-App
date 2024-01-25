const mongoose = require("mongoose");

const dbConnect = async() => {

    try {
        const connected = await mongoose.connect(process.env.DATABASE_URI,{
            useNewUrlParser : true,
            UseUnifiedTopology : true
        });


    } catch (error) {
        console.log(`error : ${error.message}`)
    }
}

module.exports = {dbConnect}