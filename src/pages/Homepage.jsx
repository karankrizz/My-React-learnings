 import React,{useState} from "react";
 export default function Homepage(){
  const starStyle={
    color:"red"
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log("Form is submitted")

  }

return <div>

  <h1>Form Registration</h1>
  <div>
    <form onSubmit={handleSubmit}>
      <div>

        <label htmlFor="username"> UserName <span style={starStyle}>*</span></label>
        <input type="text"
        name="username"
        id="username" />
      </div>
            <div>

        <label htmlFor="password"> Password <span style={starStyle}>*</span> </label>
        <input type="password"
        name="password"
        id="password" />
      </div>
  <div>
    <button
    type="submit">
      Submit
    </button>
  </div>












    </form>
  </div>








</div>












 }