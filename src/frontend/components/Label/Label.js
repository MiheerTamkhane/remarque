import { useState } from "react";
import "./Label.css";
const Label = ({ isLabel, setIsLabel, setIsPallete, dispatchNote }) => {
  const [tag, setTag] = useState("");
  return (
    <div className="toolbar-label-container">
      <span
        className="material-icons-outlined show-label"
        onClick={() => {
          setIsLabel(!isLabel);
          setIsPallete(false);
        }}
      >
        label
      </span>
      <div className={isLabel ? "label-div" : "label-div label-hide"}>
        <h3>Label note</h3>
        <div className="label-box">
          <input
            type="text"
            className="label-input"
            placeholder="Enter label name"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <span
            className="material-icons add-label"
            onClick={() => {
              dispatchNote({ type: "ADD_TAG", payload: tag });
              setTag("");
            }}
          >
            add
          </span>
        </div>
      </div>
    </div>
  );
};

export { Label };
