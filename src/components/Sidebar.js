import React from "react";
import Titlebar from "./Titlebar";
import Search from "./Search";
import FriendList from "./FriendList";
import Navbar from "./Navbar";
import { SidebarWrapper } from "../components/ui/Sidebar";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Titlebar />
      <Search />
      <FriendList />
      <Navbar />
    </SidebarWrapper>
  );
};

export default Sidebar;
