import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  // Authenticate({ token: token, setToken: setToken });
  return (
    <>
      <h1>New User Registration</h1>
      {/* <SignUpForm token={token} setToken={setToken} /> */}
      {SignUpForm({ token, setToken })}
      {Authenticate({ token, setToken })}
      {/* <Authenticate token={token} setToken={setToken} /> */}
    </>
  );
}

export default App;
