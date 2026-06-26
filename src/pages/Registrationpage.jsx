import React, { useState } from "react";
export default function Registrationpage() {
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
          <div>
            <label htmlFor="username">
              {" "}
              UserName <span style={starStyle}>*</span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">
              {" "}
              Password <span style={starStyle}>*</span>{" "}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
