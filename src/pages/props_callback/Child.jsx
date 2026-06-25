import React from "react";
export default function Child({ handleClick }) {
  return (
    <div>
      <p> Hi this is the child component</p>
      <button onClick={()=>handleClick("kirubha")}> Click me </button>
    </div>
  );
}
