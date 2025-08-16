"use client";
import React, { useState } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export const TextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <div>
      <Slate editor={editor} initialValue={initialValue}>
        <Editable />
      </Slate>
    </div>
  );
};
