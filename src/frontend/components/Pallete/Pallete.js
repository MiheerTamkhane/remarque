import "./Pallete.css";

const Pallete = ({ isPallete, setIsPallete, setIsLabel }) => {
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
        <span className="color red"></span>
        <span className="color violet"></span>
        <span className="color yellow"></span>
        <span className="color blue"></span>
      </div>
    </div>
  );
};

export { Pallete };
