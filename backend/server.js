const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect.js");
const AuthRoute = require("./routes/authRoutes.js");
const http = require("http");
const { Server } = require('socket.io');

const socketio = require("socket.io");

dotenv.config();

const app = express();

const server = http.createServer(app);


const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
      });
      
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    // We can write our socket event listeners in here...
  });

app.use(cors());

app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));

const PORT = process.env.PORT || 5000;

app.get("/" , (req,res) => {
    res.send("Server is running")
})
/* app.get("/", (req, res) => {
  res.sendFile("http://localhost:3000/home");
});
 */
app.use("/api", AuthRoute);

/* const io = socketio(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (msg) => {
    //  io.emit('chat message', msg);
    console.log("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
}); */

server.listen(PORT, async () => {
  try {
    await dbConnect();

    console.log("Connected to DB and server is runnning");
  } catch (error) {
    console.log("error : ", error);
  }
});
