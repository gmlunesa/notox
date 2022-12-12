import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --emerald-50: #ECFDF5;
    --emerald-100: #D1FAE5;
    --emerald-200: #A7F3D0;
    --emerald-300: #6EE7B7;
    --emerald-400: #34D399;
    --emerald-500: #10B981;
    --emerald-600: #059669;
    --emerald-700: #047857;
    --emerald-800: #065F46;
    --emerald-900: #064E3B;

    --slate-50: #F8FAFC;
    --slate-100: #F1F5F9;
    --slate-200: #E2E8F0;
    --slate-300: #CBD5E1;
    --slate-400: #94A3B8;
    --slate-500: #64748B;
    --slate-600: #475569;
    --slate-700: #334155;
    --slate-800: #1E293B;
    --slate-900: #0F172A;

    --primary-font: 'Inter', sans-serif;
    --logo-font: 'Work Sans', sans-serif;
  }

  body {
    background-color: var(--slate-100);
    margin: 0;
    font-family: var(--primary-font);
    font-weight: 400;
  }

  input,
  button {
    font-family: var(--primary-font);
  }

  button {
    background-color: var(--emerald-700);
    border-radius: 4px;
    color: white;
    padding: 0.5rem;
    font-weight: bold;
    border: none;
    cursor: pointer;

    &:disabled {
      background-color: var(--emerald-500);
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyle;
