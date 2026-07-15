import { useState } from "react";
import "../styles/ThemeWorkout.css"
export default function Themepage() {
  const [theme, setTheme] = useState("light");

  const pageStyle = {
    backgroundColor: theme === "dark" ? "black" : "white",
    color: theme === "dark" ? "white" : "black",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
  };
  const buttonStyle={
    borderRadius:"50px"
  }

  return (
    <div style={pageStyle}>
      <h1>Welcome to React </h1>

      <button onClick={() => setTheme("dark")}
        style={buttonStyle}>Dark Theme</button>

      <br />

      <button onClick={() => setTheme("light")}
        style={buttonStyle}>Light Theme</button>
    </div>
  );
}
