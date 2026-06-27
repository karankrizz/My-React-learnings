import React, { useState } from "react";
import Formdata from "../core/Formdata.json";
export default function Jsonform1() {
  const [loginData, setloginData] = useState({});
  const starStyle = {
    color: "red",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form is submitted");
    console.log(loginData);
  };
  const handleChange = (event) => {
    const fieldName = event?.target?.name;
    const fieldValue = event?.target?.value;
    setloginData({ ...loginData, [fieldName]: fieldValue });
  };

  return (
    <div>
      <h1>Form Registration</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {(Formdata.length != 0) ? 
            Formdata.map((value, index) => {
              return (
                <div key={index}>
                  <label htmlFor={value?.fieldId}>
                    {" "}
                    {value?.fieldLabel} {value?.fieldType!="submit"&&<span style={starStyle}>*</span>}
                  </label>
                  <input
                    type={value?.fieldType}
                    name={value?.fieldName}
                    id={value?.fieldId}
                    onChange={handleChange}
                  />{" "}
                  {value?.fieldType=="checkbox"&&<label htmlFor="checkbox">checkbox</label>}

                </div>
              );
            }
          ) : (
            <div></div>
          )}


        </form>
      </div>
    </div>
  );
}
