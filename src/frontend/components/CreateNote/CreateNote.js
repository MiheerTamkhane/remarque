import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CreateNote.css";
import { BottomToolbar } from "../componentsExport";
const CreateNote = () => {
  const [text, setText] = useState("");
  console.log("from createNote : ", text);
  return (
    <div className="create-note-container">
      <section className="note-section">
        <ReactQuill
          value={text}
          onChange={setText}
          className="react-quill"
          modules={modules}
          formats={formats}
          placeholder="Take a Note..."
          theme="snow"
        />
        <input type="text" placeholder="Title" className="note-title" />
        <BottomToolbar />
      </section>
    </div>
  );
};

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "code",
];

export { CreateNote };
