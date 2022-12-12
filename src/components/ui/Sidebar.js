import styled from "styled-components";
import { device } from "./Device";

const SidebarWrapper = styled.div`
  flex: 1;
  border-right: none;
  background-color: var(--emerald-800);

  @media screen and (${device.laptop}) {
    max-width: 20%;
  }

  @media screen and (${device.mobile}) {
    max-width: 20%;
  }
`;

const TitlebarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--emerald-900);
  color: var(--slate-50);
  height: 3rem;
  padding: 0.5rem;
  justify-content: space-between;
`;

const Logo = styled.span`
  font-family: var(--work-sans);
  font-weight: 700;

  &:hover {
    color: var(--emerald-100);
    cursor: none;
  }
`;

const TitlebarButton = styled.a`
  background-color: transparent;
  color: white;
  font-size: medium;
  border: none;
  border-radius: 4px;
  padding: 0.3rem;
  cursor: pointer;

  @media screen and (${device.mobile}) {
    display: none;
  }

  :hover {
    color: yellow;
  }
`;

const FriendListWrapper = styled.div`
  &.chatList {
    height: calc(100% - 10rem);
    overflow: scroll;
    /* Firefox */
    scrollbar-width: none;
    /* IE 10+ */
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      background: transparent;
      /* Chrome/Safari/Webkit */
      width: 0px;
    }
  }
`;

const SearchWrapper = styled.div``;
const SearchInput = styled.input`
  padding: 0.5rem;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--slate-400);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--slate-400);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--slate-400);
  }
`;

const FriendWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  cursor: pointer;

  @media screen and (${device.mobile}) {
    justify-content: center;
  }

  &:hover {
    background-color: var(--emerald-700);
    transition: 0.3s;
  }

  &.currentThread {
    background-color: var(--emerald-900);
  }
`;

const FriendImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const FriendDetails = styled.div`
  @media screen and (${device.mobile}) {
    display: none;
  }
`;

const FriendName = styled.span`
  font-size: medium;
  font-weight: 500;
`;

const FriendLastMsg = styled.p`
  font-size: small;
  color: var(--slate-300);
  margin: 0.1rem 0;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--emerald-900);
  color: var(--slate-50);
  height: 3rem;
  padding: 0.5rem;
  justify-content: space-between;

  @media screen and (${device.mobile}) {
    justify-content: center;
  }
`;

const CurrentUser = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CurrentUserImg = styled.img`
  background-color: var(--slate-100);
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (${device.mobile}) {
    display: none;
  }
`;

const CurrentUserName = styled.span`
  @media screen and (${device.mobile}) {
    display: none;
  }
`;

const NavbarButton = styled.button`
  background-color: var(--emerald-700);
  color: white;
  font-size: small;
  border: none;
  border-radius: 4px;
  padding: 0.3rem;
  cursor: pointer;

  :hover {
    background-color: var(--emerald-600);
  }
`;

export {
  SidebarWrapper,
  TitlebarWrapper,
  Logo,
  TitlebarButton,
  FriendListWrapper,
  SearchWrapper,
  SearchInput,
  FriendWrapper,
  FriendImg,
  FriendDetails,
  FriendName,
  FriendLastMsg,
  NavbarWrapper,
  CurrentUser,
  CurrentUserImg,
  CurrentUserName,
  NavbarButton,
};
