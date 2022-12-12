import React, { useState, useContext, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";

import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

import Message from "./Message";
import { MessagesWrapper } from "./ui/Chat";

import { ReactComponent as Welcome } from "../images/welcome.svg";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  // Retrieve latest thread object for the user on particular thread ID
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "threads", data.threadId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unsub();
    };
  }, [data.threadId]);

  return (
    <MessagesWrapper className={data.threadId === "null" && "empty"}>
      {data.threadId === "null" ? (
        <>
          <Welcome fill="#064E3B" />
          Start or continue a chat with a friend now!
        </>
      ) : (
        messages.map((m) => <Message message={m} key={m.id} />)
      )}
    </MessagesWrapper>
  );
};

export default Messages;
