"use client";
import React, { useState } from "react";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import { useController } from "react-hook-form";
import { EditorButton } from "@/components/TextEditor/components/EditorButton/EditorButton";
import { Leaf } from "@/components/TextEditor/components/Leaf/Leaf";
import {
  ActionButtons,
  EditableStyled,
  EditZone,
  Line,
  TextEditorWrapper,
} from "./textEditor.styles";

export const TextEditor = ({ control, name }) => {
  const [editor] = useState(() => withReact(createEditor()));
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  });

  return (
    <TextEditorWrapper>
      <Slate editor={editor} onChange={onChange} initialValue={value}>
        <ActionButtons>
          <EditorButton editor={editor} variant="bold" />
          <EditorButton editor={editor} variant="italic" />
          <EditorButton editor={editor} variant="underline" />
        </ActionButtons>
        <EditableStyled renderLeaf={(props) => <Leaf {...props} />} autoFocus />
      </Slate>
    </TextEditorWrapper>
  );
};
