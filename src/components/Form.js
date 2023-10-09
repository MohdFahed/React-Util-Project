import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Form(props) {
  // inital state of application
  const [text, updatedTextState] = useState("Enter Text here");

  const handleUpEvent = () => {
    updatedTextState(text.toUpperCase());
    props.showAlert("Upper case converted Success", "success");
  };

  const handleInputText = (event) => {
    updatedTextState(event.target.value);
  };

  const handleCapitalLtr = () => {
    let txtArr = text.trim().split(" ");
    for (let i = 0; i < txtArr.length; i++) {
      txtArr[i] = txtArr[i].charAt(0).toUpperCase() + txtArr[i].slice(1);
    }
    let CapitalFirstltr = txtArr.join(" ");
    updatedTextState(CapitalFirstltr);
    props.showAlert("Upper First Latter converted Success", "success");
  };
  const handleClearTxt = () => {
    updatedTextState("");
    props.showAlert("Clear Text Successfully...", "danger");
  };

  const navigateByPath = useNavigate();

  const goToAbout = () => {
    navigateByPath("/about");
  };
  return (
    <>
      <div className="container ">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${
              props.mode === "light" ? "light" : "dark"
            } text-${props.mode === "light" ? "dark" : "light"}`}
            id="box"
            rows="8"
            value={text}
            onChange={handleInputText}
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpEvent}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={handleCapitalLtr}
          >
            Capital First Letter
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={handleClearTxt}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={goToAbout}
          >
            Go to About
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          Total words<b> {text.trim().split(" ").length}</b> and Total
          charercters
          <b> {text.length}</b>
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Miniutes to Read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
