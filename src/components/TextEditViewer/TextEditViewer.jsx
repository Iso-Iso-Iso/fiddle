"use client";
import React, { useState } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";

export const TextEditViewer = ({ content }) => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Slate editor={editor} initialValue={content}>
      <Editable readOnly />
    </Slate>
  );
};
