import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import {
  NavbarWrapper,
  CurrentUser,
  CurrentUserImg,
  CurrentUserName,
  NavbarButton,
} from "./ui/Sidebar";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <NavbarWrapper>
      <CurrentUser>
        <CurrentUserImg src={currentUser.photoURL} alt="Your avatar" />
        <CurrentUserName>{currentUser.displayName}</CurrentUserName>
      </CurrentUser>
      <NavbarButton onClick={() => signOut(auth)}>Logout</NavbarButton>
    </NavbarWrapper>
  );
};

export default Navbar;
