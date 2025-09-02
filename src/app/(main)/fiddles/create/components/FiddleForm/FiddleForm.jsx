"use client";
import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import { TextEditor } from "@/components/TextEditor/TextEditor";
import { Button } from "@/components/uikit/Button/Button";
import { useForm } from "react-hook-form";

export const FiddleForm = ({ onSubmit }) => {
  const { control } = useForm();
  return (
    <div>
      <Input control={control} name="name" />
      <TextEditor />
      <div>
        <Button text="Save as Draft" />
        <Button text="TEST" onClick={onSubmit} />
      </div>
    </div>
  );
};
