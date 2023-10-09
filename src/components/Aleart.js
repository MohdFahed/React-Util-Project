import React from "react";

export default function Aleart(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.msgType} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.msgType}</strong>:{props.alert.msg}
      </div>
    )
  );
}
