import styled from "styled-components";
import { device } from "./Device";

const ChatWrapper = styled.div`
  flex: 2;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--emerald-600);
  color: var(--slate-50);
  height: 3rem;
  padding: 0.5rem 1rem;
  justify-content: space-between;
`;

const ChatName = styled.span`
  color: var(--slate-100);
  font-weight: bold;
`;

const MessagesWrapper = styled.div`
  background-color: var(--emerald-50);
  padding: 0.5rem 1rem;
  height: calc(100% - 9rem);
  overflow: scroll;

  // Firefox
  scrollbar-width: none;
  // IE 10+
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    background: transparent;
    // Chrome/Safari/Webkit
    width: 0px;
  }

  &.empty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    svg {
      width: 6rem;
    }
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &.user {
    flex-direction: row-reverse;
  }
`;

const MessageDetails = styled.div``;

const MessageImg = styled.img`
  width: 2rem;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (${device.mobile}) {
    display: none;
  }
`;

const MessageContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &.user {
    align-items: flex-end;
  }
`;

const MessageText = styled.div`
  background-color: var(--slate-200);
  padding: 0.6rem 0.8rem;
  margin: 0.5rem 0;
  border-radius: 10px 10px 10px 0px;
  max-width: max-content;
  font-size: small;
  display: flex;
  flex-direction: column;

  &.user {
    background-color: var(--emerald-100);
    border-radius: 10px 10px 0px 10px;
  }
`;
const MessageTimestamp = styled.span`
  margin-top: 10px;
  color: var(--slate-500);
  font-size: smaller;
  font-style: italic;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  background-color: var(--slate-50);
  padding: 0.5rem 0.5rem;

  &.empty {
    display: none;
  }

  button {
    margin-left: 0.5rem;
  }
`;

const ChatInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--slate-700);
  font-size: medium;
`;

const ChatReminder = styled.button`
  background-color: maroon;
  font-weight: normal;
`;

export {
  ChatWrapper,
  ChatHeader,
  ChatName,
  MessagesWrapper,
  MessageWrapper,
  MessageDetails,
  MessageImg,
  MessageContent,
  MessageText,
  MessageTimestamp,
  InputWrapper,
  ChatInput,
  ChatReminder,
};
