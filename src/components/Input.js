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
  const [isClassifying, setIsClassifying] = useState(false); // A simple state variable to reflect the classifying process status
  const [hasLoaded, setHasLoaded] = useState(false); // Has the Toxicity model been loaded?
  const model = useRef(null); // Retain a value throughout the Component's render cycles WITHOUT triggering a render, as opposed to a useState variable

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
      console.log("Loading model...");
      // Set a state that indicates the model is being loaded...
      model.current = await load(threshold);
      setHasLoaded(true);
      // Set the state to false to let the user know that they can check the text
      console.log("Model loaded");
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
