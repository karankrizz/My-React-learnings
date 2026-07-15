import { useState } from "react";

export default function Dateworkout() {
  const [date, setDate] = useState("");

  const dateStyle = {
    backgroundColor: "red",
    color: "white",
  };
  
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    borderRadius: "50px",
  };

  return (
    <div>
      <button
        onClick={() => setDate(new Date().toLocaleString())}
        style={buttonStyle}
      >
        Show Date
      </button>

      <h2>
        <span style={dateStyle}>{date}</span>
      </h2>
    </div>
  );
}
