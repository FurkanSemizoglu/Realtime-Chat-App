import React, { useState } from "react";
import io from "socket.io-client";

const ChatBox = ({userName}) => {
  const socket = io.connect('http://localhost:5000');

  const targetUser = "Furkan"

  const [text, setText] = useState("");

  const clickedButton = (e) => {
    e.preventDefault();

    if(text){
      console.log("emitting message")
      socket.emit('chat message',text)

      socket.emit("private message" , {
        text,
        to: userName.id
      })

      setText(""); 
    }
    console.log(text);
  };


  socket.on('chat message', (msg) => {
    console.log('Message from server:', msg);
  })
  return (
    <>
      <div>
        <input id="input" onChange={(e) => setText(e.target.value)} />
        <button onClick={(e) => clickedButton(e)}>Send</button>
      </div>
    </>
  );
};

export default ChatBox;
