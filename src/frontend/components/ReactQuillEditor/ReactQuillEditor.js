import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./ReactQuillEditor.css";
const ReactQuillEditor = ({ value, setValue }) => {
  return (
    <ReactQuill
      value={value}
      onChange={(e) => {
        setValue((value) => ({ ...value, noteDesc: e }));
      }}
      className="react-quill"
      modules={modules}
      formats={formats}
      placeholder="Take a Note..."
      theme="snow"
    />
  );
};

export { ReactQuillEditor };
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
