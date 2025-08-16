"use client";
import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import { TextEditor } from "@/components/TextEditor/TextEditor";
import { Button } from "@/components/uikit/Button/Button";
import { createFiddle } from "@/services/fiddle/createFiddle";

export const FiddleForm = ({ onSubmit }) => {
  return (
    <div>
      <Input />
      <TextEditor />
      <div>
        <Button text="Save as Draft" />
        <Button
          text="TEST"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};
