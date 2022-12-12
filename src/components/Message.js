import React, { useEffect, useContext, useRef } from "react";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

import {
  MessageWrapper,
  MessageDetails,
  MessageImg,
  MessageContent,
  MessageText,
  MessageTimestamp,
} from "./ui/Chat";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  // Scroll to last message
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // Convert message date into a more readable format
  const getMessageTimestamp = () => {
    const rawTimestamp = message.date;
    const lastMessage = new Date(
      rawTimestamp.seconds * 1000 + rawTimestamp.nanoseconds / 10000
    );
    var today = new Date();
    if (today.toLocaleDateString() === lastMessage.toLocaleDateString()) {
      if (Number(lastMessage) >= Number(today)) return "Just now";
      else return lastMessage.toLocaleTimeString();
    } else return lastMessage.toLocaleDateString();
  };
  return (
    <MessageWrapper
      ref={ref}
      className={`${message.senderId === currentUser.uid && "user"}`}
    >
      <MessageDetails>
        <MessageImg
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="Avatar"
        />
      </MessageDetails>
      <MessageContent
        className={`${message.senderId === currentUser.uid && "user"}`}
      >
        <MessageText
          className={`${message.senderId === currentUser.uid && "user"}`}
        >
          {message.text}
          <MessageTimestamp>{getMessageTimestamp()}</MessageTimestamp>
        </MessageText>
      </MessageContent>
    </MessageWrapper>
  );
};

export default Message;
