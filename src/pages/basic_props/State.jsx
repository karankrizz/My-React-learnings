import React, { useState } from "react";
export default function State() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => setcount(count + 1)}>add count</button>
      <button onClick={() => setcount(count - 1)}>decrease the count </button>
      <button onClick={() => setcount(count-count)}>the count </button>
    </div>
  );
}
