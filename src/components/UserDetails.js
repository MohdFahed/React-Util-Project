import React from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const params = useParams();
  const id = params.id;
  console.log(params);
  return (
    <div>
      <h2>User Details {id} here </h2>
    </div>
  );
}
