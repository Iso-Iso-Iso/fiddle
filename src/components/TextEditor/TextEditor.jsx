"use client";
import React, { useState } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import { useController } from "react-hook-form";

export const TextEditor = ({ control, name }) => {
  const [editor] = useState(() => withReact(createEditor()));
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  });

  return (
    <div>
      <Slate editor={editor} onChange={onChange} initialValue={value}>
        <Editable />
      </Slate>
    </div>
  );
};
