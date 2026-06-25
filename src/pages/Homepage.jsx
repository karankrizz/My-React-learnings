import React, { useState } from "react";
export default function Homepage() {
  const [canditateName, setcanditateName] = useState("kirubhakaran");
  const [skills, setskills] = useState([
    "Html",
    "Css",
    "Javascript",
    "Bootstrap",
    "React",
  ]);
  const [details, setdetails] = useState({
    name: "snow",
    species: "dog",
    Age: 4,
  });
  return (
    <div>
      <h1>Hi this is {canditateName}</h1>
      <div>
        <p>Skills :</p>
        {skills.map((value,index)=><p key={index}>{value}</p>)}
      </div>
      <h2>My Pet Details</h2>
      <p>NAME : {details.name.toLocaleUpperCase()} </p>
      <p>SPECIES :{details.species.toLocaleUpperCase()}</p>
      <p>AGE :{details.Age}</p>
    </div>
  );
}
