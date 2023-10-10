import React from "react";
import style from "./appStyle.module.css";
export default function User(props) {
  return (
    <div>
      {/* <h1>
        I am {props.person.name}. Age is {props.person.age} . skill are{" "}
        {props.person.skill}
      </h1> */}
      <h1 className={style.error}>{props.name}</h1>

      {/* <p>THis is {props.name}</p> */}
    </div>
  );
}
