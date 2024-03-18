const sendMessage = async(req,res) => {

    try {

        const  {message } = req.body;
        const {id} = req.params;
        const senderId = req.user._id;
        
    } catch (error) {
        console.log("Error in send message controlller : " , error.message)

        return res.status(500).json({
            error : "Internal server error"
        })
    }
    console.log("message sent")
}


module.exports = {
  sendMessage
};
  