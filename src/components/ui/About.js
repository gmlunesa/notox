import styled from "styled-components";
import { device } from "./Device";

const AboutWrapper = styled.div`
  background: linear-gradient(to left, var(--emerald-200), var(--emerald-600));
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;

const CardContainer = styled.div`
  background-color: var(--emerald-100);
  border-radius: 1rem;
  padding: 2rem 1rem;
  max-width: 80%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (${device.laptop}) {
    max-width: 50%;
  }
`;

const Logo = styled.h1`
  color: var(--emerald-900);
  font-family: var(--logo-font);
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem;
`;

const Messages = styled.div`
  width: 60%;

  @media screen and (${device.mobile}) {
    width: 100%;
  }
`;

const Message = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &.user {
    flex-direction: row-reverse;
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
    background-color: var(--emerald-600);
    color: white;
    border-radius: 10px 10px 0px 10px;
  }
`;

const Links = styled.div`
  margin-top: 1rem;

  a {
    margin: 1rem;
    color: var(--slate-800);
  }
`;

export {
  AboutWrapper,
  CardContainer,
  Logo,
  Messages,
  Message,
  MessageContent,
  MessageText,
  Links,
};
