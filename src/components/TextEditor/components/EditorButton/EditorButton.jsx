"use client";
import React from "react";
import { IconButton } from "@/components/uikit/IconLink/IconButton";
import { useSlate } from "slate-react";
import { Editor } from "slate";

export const EditorButton = ({ variant, editor }) => {
  const slate = useSlate();

  const handleClick = (e) => {
    if (Editor.marks(slate)?.bold) {
      Editor.removeMark(slate, variant);
      return;
    }

    Editor.addMark(slate, variant, true);
  };

  return <IconButton name={variant} onClick={handleClick} />;
};
