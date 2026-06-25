import React from "react";
export default function CustomerList(props) {
  return (
    <div>
      <p>
        Hi this is <strong style={props?.nameStyle}>{props?.customername} </strong>
      </p>
      <p>
        <strong>Age :</strong> {props?.customerAge}{" "}
      </p>
      <p>
        <strong>Qualification :</strong> {props?.customerQualification}{" "}
      </p>
      <h2><u>Customers</u></h2>
      {props?.customers.map((value,index)=><p key={index}>{value?.customerName}-{value?.Age}</p>)}
    </div>
  );
}
