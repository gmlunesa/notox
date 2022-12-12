import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivateRoute from "./pages/PrivateRoute";
import GlobalStyle from "./styles/GlobalStyle";

import "./styles/styles.css";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <PrivateRoute currentUser={currentUser}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
