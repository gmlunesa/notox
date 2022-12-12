import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaRobot, FaSignInAlt } from "react-icons/fa";
import {
  AboutWrapper,
  CardContainer,
  Logo,
  Messages,
  Message,
  MessageContent,
  MessageText,
  Links,
} from "../components/ui/About";

const About = () => {
  return (
    <AboutWrapper>
      <CardContainer>
        <Logo>techst</Logo>
        <Messages>
          <Message>
            <MessageContent>
              <MessageText>What is techst?</MessageText>
            </MessageContent>
          </Message>
          <Message className="user">
            <MessageContent>
              <MessageText className="user">
                Techst is a template that helps you set up your own private chat
                application within minutes.
              </MessageText>
            </MessageContent>
          </Message>
          <Message>
            <MessageContent>
              <MessageText>What is its stack?</MessageText>
            </MessageContent>
          </Message>
          <Message className="user">
            <MessageContent>
              <MessageText className="user">
                It's made with React and Firebase.
              </MessageText>
            </MessageContent>
          </Message>
          <Message>
            <MessageContent>
              <MessageText>Sounds awesome! How do I get started?</MessageText>
            </MessageContent>
          </Message>
          <Message className="user">
            <MessageContent>
              <MessageText className="user">
                Check out the links below!
              </MessageText>
            </MessageContent>
          </Message>
        </Messages>

        <Links>
          <a
            href="https://github.com/gmlunesa/techst"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a href="https://gmlunesa.com" target="_blank" rel="noreferrer">
            <FaRobot />
          </a>
          <Link to="/login">
            <FaSignInAlt />
          </Link>
        </Links>
      </CardContainer>
    </AboutWrapper>
  );
};

export default About;
