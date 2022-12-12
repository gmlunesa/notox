import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

import {
  FriendListWrapper,
  FriendWrapper,
  FriendImg,
  FriendDetails,
  FriendName,
  FriendLastMsg,
} from "./ui/Sidebar";

const FriendList = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch, data } = useContext(ChatContext);

  const shortenMessage = (chat) => {
    if (!chat || chat.length <= 30) return chat;

    return `${chat.substr(0, chat.lastIndexOf(" ", 30))}...`;
  };

  useEffect(() => {
    const getChats = () => {
      // Retrieve latest chats object for the user
      const unsub = onSnapshot(doc(db, "chats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (friend) => {
    // Update state
    dispatch({ type: "SELECT_FRIEND", payload: friend });
  };

  return (
    <FriendListWrapper className="chatList">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => {
          return (
            <FriendWrapper
              key={chat[0]}
              onClick={() => handleSelect(chat[1].userInfo)}
              className={
                data.user?.uid === chat[1].userInfo.uid ? "currentThread" : ""
              }
            >
              <FriendImg src={chat[1].userInfo.photoURL} alt="Friend avatar" />
              <FriendDetails>
                <FriendName>{chat[1].userInfo.displayName}</FriendName>
                <FriendLastMsg>
                  {shortenMessage(chat[1].lastMessage?.text)}
                </FriendLastMsg>
              </FriendDetails>
            </FriendWrapper>
          );
        })}
    </FriendListWrapper>
  );
};

export default FriendList;
