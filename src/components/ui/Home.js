import styled from "styled-components";
import { device } from "./Device";

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeChatWrapper = styled.div`
  border: 1px solid var(--slate-100);
  border-radius: 10px;
  overflow: hidden;
  width: 90%;
  height: 80%;
  display: flex;
  box-shadow: 0 4px 4px 0 var(--slate-200);

  @media screen and (${device.mobile}) {
    height: 95%;
    width: 95%;
  }
`;

export { HomeContainer, HomeChatWrapper };
