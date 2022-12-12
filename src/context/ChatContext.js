import { createContext, useReducer, useContext } from "react";

import { AuthContext } from "./AuthContext";

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    threadId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "SELECT_FRIEND":
        const threadId =
          currentUser.uid > action.payload.uid
            ? currentUser.uid + action.payload.uid
            : action.payload.uid + currentUser.uid;

        return {
          user: action.payload,
          threadId,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatContextProvider };
