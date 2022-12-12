import React, { useState, useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

import { db } from "../firebase";
import { InputWrapper, ChatInput } from "./ui/Chat";

const Input = () => {
  const [text, setText] = useState("");
  const [err, setErr] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    try {
      setIsSending(true);
      // Send the message
      await updateDoc(doc(db, "threads", data.threadId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
      // Update chat list for current user
      await updateDoc(doc(db, "chats", currentUser.uid), {
        [data.threadId + ".lastMessage"]: {
          text,
        },
        [data.threadId + ".date"]: serverTimestamp(),
      });
      // Update chat list for the friend user
      await updateDoc(doc(db, "chats", data.user.uid), {
        [data.threadId + ".lastMessage"]: {
          text,
        },
        [data.threadId + ".date"]: serverTimestamp(),
      });

      setText("");
      setErr(false);
      setIsSending(false);
    } catch (error) {
      setErr(true);
      setIsSending(false);
    }
  };
  return (
    <InputWrapper className={data.threadId === "null" && "empty"}>
      <ChatInput
        type="text"
        id="text"
        value={text}
        placeholder={data.threadId !== "null" ? "Send a message..." : " "}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={isSending || data.threadId === "null"}
        onClick={handleSend}
      >
        <FaArrowRight />
      </button>
    </InputWrapper>
  );
};

export default Input;
