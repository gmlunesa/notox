import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

import { HomeContainer, HomeChatWrapper } from "../components/ui/Home";

const Home = () => {
  return (
    <HomeContainer>
      <HomeChatWrapper>
        <Sidebar />
        <Chat />
      </HomeChatWrapper>
    </HomeContainer>
  );
};

export default Home;
