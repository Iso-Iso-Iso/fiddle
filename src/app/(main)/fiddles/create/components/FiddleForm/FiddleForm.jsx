"use client";
import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import { TextEditor } from "@/components/TextEditor/TextEditor";
import { Button } from "@/components/uikit/Button/Button";
import { useForm } from "react-hook-form";
import { fiddleResolver, getDefaultValues } from "@/validation/fiddle.schema";

export const FiddleForm = ({ onSubmit, fiddle }) => {
  const { control, handleSubmit } = useForm({
    resolver: fiddleResolver,
    defaultValues: getDefaultValues(fiddle),
  });

  const handleFiddleCreate = (state) => {
    if (fiddle) {
      onSubmit({ ...state, id: fiddle.id });
      return;
    }
    onSubmit(state);
  };

  return (
    <div>
      <Input control={control} name="name" />
      <TextEditor control={control} name="content" />
      <div>
        <Button text="Save" onClick={handleSubmit(handleFiddleCreate)} />
      </div>
    </div>
  );
};
