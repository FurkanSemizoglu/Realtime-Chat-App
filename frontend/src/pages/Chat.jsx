import React from "react";
import ChatNavbar from "../components/ChatNavbar";
import LeftBar from "../components/LeftBar";
import ChatBox from "../components/ChatBox";
import { useParams } from "react-router-dom";


const Chat = () => {

  const {userName} = useParams();

  console.log(userName)
  return (
    <>
      <div className="">
        <ChatNavbar />

        <div className="flex">

        <LeftBar />

        <ChatBox userName={userName} />
        </div>
      </div>
    </>
  );
};

export default Chat;
