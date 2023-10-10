import React, { useState } from "react";

export default function FormHandle() {
  const [initName, setNameState] = useState("");
  const [initComment, setCommentState] = useState("");
  const [initTopic, setTopicState] = useState("react");
  const handleNameEvent = (e) => {
    setNameState(e.target.value);
  };
  const handleCommentEvent = (e) => {
    setCommentState(e.target.value);
  };
  const handleTopicEvent = (e) => {
    setTopicState(e.target.value);
  };
  const handleSubmit = () => {
    let dataSend = {
      name: initName,
      Comment: initComment,
      topic: initTopic,
    };
    alert(JSON.stringify(dataSend));
  };
  return (
    <>
      <div>
        <label>Name:</label>
        <input type="text" value={initName} onChange={handleNameEvent} />
      </div>
      <div>
        <label>Comments</label>
        <textarea value={initComment} onChange={handleCommentEvent}></textarea>
      </div>
      <div>
        <label>Topic:</label>
        <select value={initTopic} onChange={handleTopicEvent}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
