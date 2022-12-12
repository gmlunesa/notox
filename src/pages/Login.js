import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaUserPlus, FaRobot } from "react-icons/fa";
import { auth } from "../firebase";
import {
  FormContainer,
  HeadingWrapper,
  FormWrapper,
  Form,
  Logo,
  Input,
  AlertWrapper,
  Alert,
  LinkWrapper,
} from "../components/ui/Form";

const Login = () => {
  const [err, setErr] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Sign in user (in Auth)
      const res = await signInWithEmailAndPassword(auth, email, password);

      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!err) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [err]);

  return (
    <FormContainer>
      <HeadingWrapper>
        <h1>Login</h1>
      </HeadingWrapper>
      <FormWrapper>
        <Logo>techst</Logo>
        <Form onSubmit={handleSubmit}>
          <Input type="email" id="email" name="email" placeholder="Email" />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <button disabled={isLoading}>
            {isLoading ? "Logging you in..." : "Log in"}
          </button>
        </Form>
        <AlertWrapper>
          {isVisible && <Alert>Something went wrong.</Alert>}
        </AlertWrapper>
        <LinkWrapper>
          <Link to="/register">
            <FaUserPlus />
          </Link>
          <a href="https://gmlunesa.com" target="_blank" rel="noreferrer">
            <FaRobot />
          </a>
        </LinkWrapper>
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;
