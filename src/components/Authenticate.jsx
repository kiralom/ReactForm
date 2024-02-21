import { useState } from "react";

export default function Authenticate(tst) {
  const token = tst.token;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [userName, setUserName] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      setUserName(result.data.username);
      console.log(result, userName);
    } catch (error) {
      console.error(setError);
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {error == true ? <p>"Error"</p> : successMessage}

      <button onClick={() => handleClick()}>Authenticate Token</button>

      <p>Confirmed Username: {userName}</p>
    </>
  );
}
