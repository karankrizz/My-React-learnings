import React from "react";
import CustomerList from "./CustomerList";
export default function HomePage() {
  const customerName = "Kirubhakaran R";
  const customerAge = 25;
  const customerQualification = "Msc Mathematics";
  const nameStyle={
    color:"red",
  }

  return (
    <div>
      <h1 > Hi this is the Homepage</h1>
      <CustomerList
        customername={customerName.toUpperCase()}
        customerAge={customerAge}
        customerQualification={customerQualification}
        nameStyle={nameStyle}
      />
    </div>
  );
}
