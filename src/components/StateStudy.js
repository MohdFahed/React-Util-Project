import React, { useState } from "react";

export default function StateStudy() {
  const [initialState, setState] = useState("");
  const handleSubscribe = () => {
    setState("Subscribed");
  };
  return (
    <div>
      <h3>{initialState ? "Thanks for Subscribe" : ""}</h3>
      <button onClick={handleSubscribe}>
        {initialState ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
}
