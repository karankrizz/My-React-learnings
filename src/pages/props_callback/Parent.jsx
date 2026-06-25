import React from "react";
import Child from "./Child";
export default function Parent(){
    const handleClick=(name)=>{
        console.log("button is clicked,"+name)
    }
    return <div>
        <h1>Hi this is the parent component</h1>
        <Child
        handleClick={handleClick}
        />
    </div>
}