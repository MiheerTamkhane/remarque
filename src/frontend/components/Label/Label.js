import "./Label.css";
const Label = ({ isLabel, setIsLabel, setIsPallete }) => {
  return (
    <div className="toolbar-label-container">
      <button
        className="ct-btn show-label"
        onClick={() => {
          setIsLabel(!isLabel);
          setIsPallete(false);
        }}
      >
        Add Label
      </button>
      <div className={isLabel ? "label-div" : "label-div label-hide"}>
        <h3>Label note</h3>
        <div className="label-box">
          <input
            type="text"
            className="label-input"
            placeholder="Enter label name"
          />
          <span className="material-icons add-label">add</span>
        </div>
      </div>
    </div>
  );
};

export { Label };
