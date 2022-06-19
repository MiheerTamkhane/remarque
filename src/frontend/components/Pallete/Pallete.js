import "./Pallete.css";
import { useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
const Pallete = ({
  isPallete,
  setIsPallete,
  dispatchNote,
  setUpdatedNote,
  isModal,
}) => {
  const palleteRef = useRef();
  useOnClickOutside(palleteRef, () => setIsPallete(false));
  const updatePalleteHandler = (color) => {
    if (isModal) {
      setUpdatedNote((updatedNote) => ({ ...updatedNote, noteColor: color }));
    } else {
      dispatchNote({ type: "NOTE_COLOR", payload: color });
    }
  };
  return (
    <div className="color-pallete-container" ref={palleteRef}>
      <span
        className="material-icons-outlined pallete-icon"
        onClick={() => {
          setIsPallete(true);
        }}
      >
        color_lens
      </span>
      <div className={isPallete ? "color-pallete" : "pallete-hide"}>
        <span
          className="color default"
          onClick={() => updatePalleteHandler("default")}
        ></span>
        <span
          className="color red"
          onClick={() => updatePalleteHandler("red")}
        ></span>
        <span
          className="color violet"
          onClick={() => updatePalleteHandler("violet")}
        ></span>
        <span
          className="color yellow"
          onClick={() => updatePalleteHandler("yellow")}
        ></span>
        <span
          className="color blue"
          onClick={() => updatePalleteHandler("blue")}
        ></span>
      </div>
    </div>
  );
};

export { Pallete };
