import React from "react";

function Geeting(props) {
  console.log(props);
  return (
    <div>
      <h1>
        Well Come {props.userName} {props.heroName}
      </h1>
      {props.children}
      <button disabled={true} onClick={() => console.log("Click button")}>
        Click
      </button>
    </div>
  );
}
export default Geeting;
