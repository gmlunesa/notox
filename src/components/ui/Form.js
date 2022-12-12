import styled from "styled-components";

const FormContainer = styled.div`
  background-color: var(--slate-100);
  height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;

  h1 {
    margin: 1rem;
  }
`;

const FormWrapper = styled.div`
  background-color: white;
  padding: 2rem 4rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  box-shadow: 0 4px 4px 0 var(--slate-200);

  svg {
    width: 1.5rem;
  }
`;

const Logo = styled.span`
  color: var(--emerald-900);
  font-family: var(--logo-font);
  font-size: 2rem;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.5rem 0.25rem;
  border: none;
  border-bottom: 2px solid var(--emerald-700);
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--slate-500);
  font-size: small;
  cursor: pointer;
`;

const AlertWrapper = styled.div`
  height: 1.5rem;
`;

const Alert = styled.span`
  color: firebrick;
  font-size: small;
  max-width: 100%;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    background-color: var(--emerald-100);
    color: var(--slate-800);
    border: none;
    border-radius: 10px;
    padding: 0.75rem 1rem;
    cursor: pointer;
    font-size: medium;
    text-decoration: none;

    :hover {
      background-color: var(--emerald-200);
    }
  }
`;

export {
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
};
