import { useRef } from "react";

export default function UncontrolledForm(){
 const emailField=useRef()
 const passwordField=useRef()


 const handleSubmit=(event)=>{
    event.preventDefault()
    const formData={
        email:emailField?.current?.value,
        password:passwordField?.current?.value
    }
    console.log(formData)
 }
   const starStyle = {
    color: "red",
  };




  return (
    <div>
      <h1>Form Registration</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">
              
              UserName <span style={starStyle}>*</span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              ref={emailField}
              
            />
          </div>
          <div>
            <label htmlFor="password">
            
              Password <span style={starStyle}>*</span>{" "}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              ref={passwordField}
              
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