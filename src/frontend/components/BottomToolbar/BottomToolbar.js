import "./BottomToolbar.css";
import { Label } from "../componentsExport";
const BottomToolbar = () => {
  return (
    <div className="bottom-toolbar">
      <Label />
      <span className="material-icons-outlined">color_lens</span>
      <button className="add-note ct-btn">Add</button>
      <button className="close-note ct-btn">Close</button>
    </div>
  );
};

export { BottomToolbar };
