import React from "react";
import User from "./User";

export default function UserList() {
  const name = ["Fahed", "Rahman", "Ayesh"];
  const person = [
    { id: 1, name: "Fahed", age: 23, skill: "Angular" },
    { id: 2, name: "Rahman", age: 33, skill: "React" },
    { id: 3, name: "Ayesha", age: 21, skill: "HTML" },
    { id: 4, name: "Pammi", age: 28, skill: "CSS" },
  ];
  return (
    <>
      {/* <div>
        {person.map((person) => {
          return <User key={person.id} person={person} />;
        })}
      </div> */}
      <div>
        {name.map((nameElement, index) => {
          return <User key={index} name={nameElement} />;
        })}
      </div>
    </>
  );
}
