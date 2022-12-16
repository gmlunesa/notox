import React, { useState, useContext, useEffect, useRef } from "react";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

import { load } from "@tensorflow-models/toxicity";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

import { db } from "../firebase";
import { InputWrapper, ChatInput, ChatReminder } from "./ui/Chat";

const Input = () => {
  const [text, setText] = useState("");
  const [err, setErr] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [isToxic, setIsToxic] = useState(false);
  const [isClassifying, setIsClassifying] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const model = useRef(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    try {
      setIsSending(true);
      setIsClassifying(true);

      const predictions = await model.current.classify([text]);
      setIsClassifying(false);

      const toxicityResult = predictions[6].results[0].match;
      setIsToxic(toxicityResult);

      if (!toxicityResult) {
        // Start Send to Firebase
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
        // End Send to Firebase
      }
      setText("");
      setErr(false);
      setIsSending(false);
    } catch (error) {
      console.log(error);
      setErr(true);
      setIsSending(false);
    }
  };

  useEffect(() => {
    async function loadModel() {
      const threshold = 0.9;
      model.current = await load(threshold);
      setHasLoaded(true);
    }
    loadModel();
  }, []);

  return (
    <InputWrapper className={data.threadId === "null" && "empty"}>
      <ChatInput
        type="text"
        id="text"
        value={text}
        placeholder={data.threadId !== "null" ? "Send a message..." : " "}
        onChange={(e) => {
          setText(e.target.value);
          setIsToxic(false);
        }}
      />

      {isToxic && <ChatReminder>Pls be kind.</ChatReminder>}
      <button
        disabled={
          isSending || !hasLoaded || isClassifying || data.threadId === "null"
        }
        onClick={handleSend}
      >
        {isSending ? <FaSpinner /> : <FaArrowRight />}
      </button>
    </InputWrapper>
  );
};

export default Input;
