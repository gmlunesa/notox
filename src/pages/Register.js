import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { FaSignInAlt, FaRobot } from "react-icons/fa";

import { auth, storage, db } from "../firebase";
import {
  FormContainer,
  HeadingWrapper,
  FormWrapper,
  Form,
  Logo,
  Input,
  Label,
  AlertWrapper,
  Alert,
  LinkWrapper,
} from "../components/ui/Form";
import { ReactComponent as AttachFile } from "../images/file.svg";

const Register = () => {
  const [err, setErr] = useState(false);
  const [isErrorVisible, setErrorVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isFileValid, setFileValid] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const file = e.target.file.files[0];

    try {
      // Create a user (in Auth)
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Generate unique string
      const date = new Date().getTime();
      const fileName = `${username + date}`;

      // Create reference (in Storage)
      const storageRef = ref(storage, fileName);

      // Upload file
      const uploadTask = await uploadBytesResumable(storageRef, file);

      // Get download link upon success
      const downloadUrl = await getDownloadURL(storageRef);

      try {
        // Update user profile (in Auth)
        await updateProfile(res.user, {
          displayName: username,
          photoURL: downloadUrl,
        });

        // Create user (in Firestore)
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName: username,
          email,
          photoURL: downloadUrl,
        });

        // Create chat for the user (in Firestore)
        await setDoc(doc(db, "chats", res.user.uid), {});

        setLoading(false);
        navigate("/");
      } catch (err) {
        console.log(err);
        setErr(true);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  };

  const checkImageSize = (e) => {
    // Check file size
    let fileSize = e.target.files[0].size;

    if (fileSize > 10e5) {
      window.alert("Please upload a file smaller than 1 MB.");
      setFileValid(false);
    } else {
      setFileValid(true);
    }
  };

  useEffect(() => {
    if (!err) {
      setErrorVisible(false);
      return;
    }

    setErrorVisible(true);
    const timer = setTimeout(() => {
      setErrorVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [err]);

  return (
    <FormContainer>
      <HeadingWrapper>
        <h1>Register</h1>
      </HeadingWrapper>
      <FormWrapper>
        <Logo>techst</Logo>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            maxLength={20}
            required
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <Input
            type="file"
            id="file"
            name="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={checkImageSize}
          />
          <Label htmlFor="file">
            <AttachFile />
            <span>Add your avatar.</span>
          </Label>
          <button disabled={!isFileValid || isLoading}>
            {isLoading ? "Creating account..." : "Sign up"}
          </button>
        </Form>
        <AlertWrapper>
          {isErrorVisible && <Alert>Something went wrong.</Alert>}
        </AlertWrapper>
        <LinkWrapper>
          <Link to="/login">
            <FaSignInAlt />
          </Link>
          <a href="https://gmlunesa.com" target="_blank" rel="noreferrer">
            <FaRobot />
          </a>
        </LinkWrapper>
      </FormWrapper>
    </FormContainer>
  );
};

export default Register;
