import React, { useState } from "react";

export default function ConditionalRender() {
  const [initalState, setState] = useState({
    isUserLogin: true,
  });

  /* 1-using If-Else*/

  //    if(initalState.isUserLogin){
  //          return <div>Well come Fahed</div>
  //    }else{
  // return <div>Well come Guest</div>
  //    }
  return (
    <>
      {/*2- Using Ternary Condition 
      <div>
        <h1> Well come {initalState.isUserLogin ? "Fahed" : "Guest"}</h1>
      </div> */}

      {/*3 Short Circuit Orators */}
      {initalState.isUserLogin && <h1>Well come to Fahed</h1>}
      {!initalState.isUserLogin && <h1>Well come to Guest</h1>}
    </>
  );
}
