"use client";
import React from "react";
import { Input } from "@/components/uikit/Input/Input";
import { TextEditor } from "@/components/TextEditor/TextEditor";
import { Button } from "@/components/uikit/Button/Button";
import { useForm } from "react-hook-form";
import { fiddleResolver, getDefaultValues } from "@/validation/fiddle.schema";
import { FormWrapper } from "@/app/(main)/fiddles/create/components/FiddleForm/fiddleForm.styles";
import { FileUpload } from "@/components/uikit/FileUpload/FileUpload";
import { uploadFileOnBucket } from "@/utils/uploadFileOnBucket";

export const FiddleForm = ({ onSubmit, fiddle }) => {
  const { control, handleSubmit } = useForm({
    resolver: fiddleResolver,
    defaultValues: getDefaultValues(fiddle),
  });

  const handleFiddleCreate = async (state) => {
    const fileUploadedSlugs = await Promise.all(
      state.files.map((item) => uploadFileOnBucket(item.file))
    );
    console.log(fileUploadedSlugs);
    if (fiddle) {
      onSubmit({ ...state, id: fiddle.id, images: fileUploadedSlugs });
      return;
    }
    onSubmit({ ...state, images: fileUploadedSlugs });
  };

  return (
    <FormWrapper>
      <Input control={control} name="name" />
      <TextEditor control={control} name="content" />
      <FileUpload control={control} name="files" multiple />
      <div>
        <Button text="Save" onClick={handleSubmit(handleFiddleCreate)} />
      </div>
    </FormWrapper>
  );
};
