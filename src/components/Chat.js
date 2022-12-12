import React, { useContext } from "react";

import { ChatContext } from "../context/ChatContext";

import Messages from "./Messages";
import Input from "./Input";

import { ChatWrapper, ChatHeader, ChatName } from "./ui/Chat";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <ChatWrapper>
      <ChatHeader>
        <ChatName>{data.user?.displayName}</ChatName>
      </ChatHeader>
      <Messages />
      <Input />
    </ChatWrapper>
  );
};

export default Chat;
