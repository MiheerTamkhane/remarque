import "./Pallete.css";

const Pallete = ({ isPallete, setIsPallete, setIsLabel, dispatchNote }) => {
  return (
    <div className="color-pallete-container">
      <span
        className="material-icons-outlined pallete-icon"
        onClick={() => {
          setIsPallete(!isPallete);
          setIsLabel(false);
        }}
      >
        color_lens
      </span>
      <div className={isPallete ? "color-pallete" : "pallete-hide"}>
        <span
          className="color transparent"
          onClick={() =>
            dispatchNote({ type: "NOTE_COLOR", payload: "transparent" })
          }
        ></span>
        <span
          className="color red"
          onClick={() => dispatchNote({ type: "NOTE_COLOR", payload: "red" })}
        ></span>
        <span
          className="color violet"
          onClick={() =>
            dispatchNote({ type: "NOTE_COLOR", payload: "violet" })
          }
        ></span>
        <span
          className="color yellow"
          onClick={() =>
            dispatchNote({ type: "NOTE_COLOR", payload: "yellow" })
          }
        ></span>
        <span
          className="color blue"
          onClick={() => dispatchNote({ type: "NOTE_COLOR", payload: "blue" })}
        ></span>
      </div>
    </div>
  );
};

export { Pallete };
