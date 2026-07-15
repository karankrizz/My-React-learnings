import { useState } from "react";

export default function Loginworkout({ name }) {
  const [message, setMessage] = useState("");

  const buttonStyle = {
    borderRadius: "50px",
  };

  return (
    <div>
      <h1>Login Logout Workout</h1>

      <button
        style={buttonStyle}
        onClick={() => setMessage(`Hi Welcome ${name}`)}
      >
        Login
      </button>

      <button
        style={buttonStyle}
        onClick={() => setMessage(`Thank You ${name}`)}
      >
        Logout
      </button>

      <h2>{message}</h2>
    </div>
  );
}