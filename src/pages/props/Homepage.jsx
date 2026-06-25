import React from "react";
import CustomerList from "./CustomerList";
export default function HomePage() {
  const customerName = "Kirubhakaran R";
  const customerAge = 25;
  const customerQualification = "Msc Mathematics";
  const nameStyle = {
    color: "red",
  };
  const customers = [
    {
      customerName: "vigneshwaran",
      Age: 31
    },
        {
      customerName: "saravanan",
      Age: 31
    },    {
      customerName: "gopi",
      Age: 23
    }
  ];

  return (
    <div>
      <h1> Hi this is the Sample Homepage</h1>
      <CustomerList
        customername={customerName.toUpperCase()}
        customerAge={customerAge}
        customerQualification={customerQualification}
        nameStyle={nameStyle}
        customers={customers}
      />
    </div>
  );
}
