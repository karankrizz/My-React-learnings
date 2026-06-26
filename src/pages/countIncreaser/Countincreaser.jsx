import React, { useState } from "react";
export default function Countincreaser() {
  const [count, setcount] = useState(0);
  const [fruits, setfruits] = useState(["apple", "orange"]);
  const [student, setstudent] = useState({
    name: "kirubhakaran",
    age: 25,
    degree: "Bsc Mathematics ",
  });
  return (
    <div>
      <p>COUNT : {count} </p>
      <button onClick={() => setcount(count + 1)}>ADD COUNT</button>
      <hr />
      <div>
        <p>fruits : </p>
        {fruits.map((value, index) => (
          <p>{value}</p>
        ))}
        <button onClick={() => setfruits([...fruits, "mango"])}>
          ADD FRUITS
        </button>
      </div>
      <hr />
      <div>
        <p>NAME :{student?.name} </p>
        <p>AGE : {student?.age} </p>
        <p>DEGREE : {student?.degree} </p>
        <button
          onClick={() => setstudent({ ...student, degree: "Msc Mathematics" })}
        >
          update the degree
        </button>
      </div>
    </div>
  );
}
