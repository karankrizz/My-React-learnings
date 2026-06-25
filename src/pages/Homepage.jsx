import React from "react";
import CustomerList from "./CustomerList";
export default function HomePage() {
  const customerName = "Kirubhakaran R";

  return (
    <div>
      <h1> Hi this is the Homepage</h1>
      <CustomerList customername={customerName} />
    </div>
  );
}
