import { useState } from "react";
import "./BottomToolbar.css";
import { Label, Pallete } from "../componentsExport";
const BottomToolbar = () => {
  const [isLabel, setIsLabel] = useState(false);
  const [isPallete, setIsPallete] = useState(false);
  return (
    <div className="bottom-toolbar">
      <Label
        isLabel={isLabel}
        setIsLabel={setIsLabel}
        setIsPallete={setIsPallete}
      />
      <Pallete
        isPallete={isPallete}
        setIsPallete={setIsPallete}
        setIsLabel={setIsLabel}
      />
      <button className="add-note ct-btn">Add</button>
      <button className="close-note ct-btn">Close</button>
    </div>
  );
};

export { BottomToolbar };
