import React from "react";
import { FaStar } from "react-icons/fa";
import {
  TitlebarWrapper,
  Logo,
  // CurrentUser,
  // CurrentUserImg,
  // CurrentUserName,
  TitlebarButton,
} from "./ui/Sidebar";

const Titlebar = () => {
  return (
    <TitlebarWrapper>
      <Logo>notox</Logo>
      <TitlebarButton href="https://github.com/gmlunesa" target="_blank">
        <FaStar />
      </TitlebarButton>
    </TitlebarWrapper>
  );
};

export default Titlebar;
