import React, { useState, useContext } from "react";
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

import {
  FriendListWrapper,
  SearchWrapper,
  SearchInput,
  FriendWrapper,
  FriendImg,
  FriendDetails,
  FriendName,
} from "./ui/Sidebar";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const handleSearch = async () => {
    // Create a reference to the users collection.
    const usersRef = collection(db, "users");

    // Create a query against the collection.
    const q = query(usersRef, where("displayName", "==", searchQuery));

    try {
      // Execute query.
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSearchResult(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    // Generate unique thread ID between current user and other user
    const threadId =
      currentUser.uid > searchResult.uid
        ? currentUser.uid + searchResult.uid
        : searchResult.uid + currentUser.uid;

    try {
      // Check whether a thread exists between two users
      const res = await getDoc(doc(db, "threads", threadId));

      // If thread does not exist between two users
      if (!res.exists()) {
        // Create a thread in the threads collection
        await setDoc(doc(db, "threads", threadId), { messages: [] });

        // Create chat history record for the current user
        await updateDoc(doc(db, "chats", currentUser.uid), {
          [threadId + ".userInfo"]: {
            uid: searchResult.uid,
            displayName: searchResult.displayName,
            photoURL: searchResult.photoURL,
          },
          [threadId + ".date"]: serverTimestamp(),
        });

        // Create chat history record for the searched user
        await updateDoc(doc(db, "chats", searchResult.uid), {
          [threadId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [threadId + ".date"]: serverTimestamp(),
        });

        // Update state
        dispatch({ type: "SELECT_FRIEND", payload: searchResult });
      }
    } catch (error) {
      setErr(true);
    }

    setSearchResult(null);
    setSearchQuery("");
  };

  return (
    <FriendListWrapper>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchQuery}
          onKeyDown={handleKey}
          onChange={(e) => {
            setSearchResult(null);
            setSearchQuery(e.target.value);
          }}
        />
      </SearchWrapper>

      {searchResult && (
        <FriendWrapper onClick={handleSelect}>
          <FriendImg src={searchResult.photoURL} alt="Search result avatar" />
          <FriendDetails>
            <FriendName>{searchResult.displayName}</FriendName>
          </FriendDetails>
        </FriendWrapper>
      )}
    </FriendListWrapper>
  );
};

export default Search;
