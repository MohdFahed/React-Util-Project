import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [initCount, setCount] = useState(1);
  const [initITem, setItem] = useState(1);
  const useMemoHook = useMemo(
    function multiplyCount() {
      console.log("Multiple count Function Executed...");
      return initCount * 2;
    },
    [initCount]
  );

  return (
    <div>
      {/* <h1>Count : {initCount}</h1> */}
      <h1>Item : {initITem}</h1>
      <h1>Function Multiple Count: {useMemoHook}</h1>
      <button
        onClick={() => {
          setCount(initCount + 1);
        }}
      >
        Count + 1
      </button>
      <button
        onClick={() => {
          setItem(initITem * 10);
        }}
      >
        Item +
      </button>
    </div>
  );
}
