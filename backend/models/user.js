const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    userName :{
        type:String,
        required: true,
        unique : true,
        trim:true
    },
    password:{
        type:String,
        required : true
    }
},
{
    timestamps: true
})


userSchema.pre("save" , async function () {
    this.password = await bcrypt.hash(this.password,12)
})

const User = mongoose.model('User' , userSchema)

module.exports = User;