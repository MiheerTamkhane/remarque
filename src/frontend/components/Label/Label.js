import { useState, useRef } from "react";
import "./Label.css";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
const Label = ({
  isLabel,
  setIsLabel,
  dispatchNote,
  setUpdatedNote,
  isModal,
}) => {
  const labelRef = useRef();
  useOnClickOutside(labelRef, () => setIsLabel(false));

  const [tag, setTag] = useState("");
  const updateNoteTags = (tag) => {
    if (isModal) {
      setUpdatedNote((updatedNote) => ({
        ...updatedNote,
        tags: [...updatedNote.tags, tag],
      }));
    } else {
      dispatchNote({ type: "ADD_TAG", payload: tag });
    }
    setTag("");
  };

  return (
    <div className="toolbar-label-container" ref={labelRef}>
      <span
        className="material-icons-outlined show-label"
        onClick={() => {
          setIsLabel(true);
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
              updateNoteTags(tag);
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
