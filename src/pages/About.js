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
        <Logo>notox</Logo>
        <Messages>
          <Message>
            <MessageContent>
              <MessageText>What is notox?</MessageText>
            </MessageContent>
          </Message>
          <Message className="user">
            <MessageContent>
              <MessageText className="user">
                Notox is a chat application that uses AI to prevent rude and
                toxic messages from being sent.
              </MessageText>
            </MessageContent>
          </Message>
          <Message>
            <MessageContent>
              <MessageText>
                Why are you using AI? Can't you just filter out words?
              </MessageText>
            </MessageContent>
          </Message>
          <Message className="user">
            <MessageContent>
              <MessageText className="user">
                Through AI, the context is analyzed to measure the potential
                toxicity of a message. Consider the following sentences:
                <ul>
                  <li>
                    "The weather is <strong>horrible</strong>."
                  </li>
                  <li>
                    "You are <strong>horrible</strong>."
                  </li>
                </ul>
                If a dictionary-based approach is used, both sentences would
                raise a flag for the use of the word "horrible". However with
                AI, the context is distinguished so only the second sentence
                would be flagged.
              </MessageText>
            </MessageContent>
          </Message>
        </Messages>

        <Links>
          <a
            href="https://github.com/gmlunesa/notox"
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
