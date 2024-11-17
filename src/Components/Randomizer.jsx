"use client";

import { useState } from "react";

let randomNumber = Math.random(10);

export default function Randomizer() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="border bg-grey-500" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
