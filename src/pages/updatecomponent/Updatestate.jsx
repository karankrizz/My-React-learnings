import React, { useState } from "react";
export default function Updatestate() {
  const [name, setname] = useState("kirubhakaran");
  const [age, setage] = useState(25);
  const changeName = () => {
    setname("Vigneshwaran");
  };
  const changeAge = () => {
    setage(31);
  };
  const changeTotaly=()=>{
    setname("Snow")
    setage(4)
  }
  return (
    <div>
      <p>Student Name : {name}</p>
      <p>Student Age :{age}</p>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeAge}>Change Age</button>
      <button onClick={changeTotaly}>Change totally</button>

    </div>
  );
}
