import React from "react";
import ChatNavbar from "../components/ChatNavbar";
import LeftBar from "../components/LeftBar";
import ChatBox from "../components/ChatBox";

const Chat = () => {
  return (
    <>
      <div className="">
        <ChatNavbar />

        <div className="flex">

        <LeftBar />

        <ChatBox />
        </div>
      </div>
    </>
  );
};

export default Chat;
