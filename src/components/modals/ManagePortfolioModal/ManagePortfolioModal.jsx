"use client";
import React from "react";
import { Modal } from "@/components/uikit/Modal/Modal";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/uikit/Textarea/Textarea";
import { Input } from "@/components/uikit/Input/Input";
import { Wrapper } from "@/components/modals/ManagePortfolioModal/managePortfolioModal.styles";
import { Button } from "@/components/uikit/Button/Button";
import { FileUpload } from "@/components/uikit/FileUpload/FileUpload";
import { createUserPortfolioAction } from "@/actions/userPortfolio/createUserPortfolioAction";
import {
  PORTFOLIO_SCHEMA_FIELDS,
  portfolioDefaultValues,
  portfolioResolver,
} from "@/validation/portfolio.schema";

export const ManagePortfolioModal = () => {
  const { control, handleSubmit } = useForm({
    resolver: portfolioResolver,
    defaultValues: portfolioDefaultValues,
  });

  const handleFormSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data[PORTFOLIO_SCHEMA_FIELDS.NAME]);
    formData.append("description", data[PORTFOLIO_SCHEMA_FIELDS.DESCRIPTION]);
    formData.append("image", data[PORTFOLIO_SCHEMA_FIELDS.IMAGES][0].file);

    createUserPortfolioAction({
      name: data[PORTFOLIO_SCHEMA_FIELDS.NAME],
      description: data[PORTFOLIO_SCHEMA_FIELDS.DESCRIPTION],
      image: data[PORTFOLIO_SCHEMA_FIELDS.IMAGES][0].file,
    });
  };

  return (
    <Modal variant="medium">
      <Wrapper>
        <Input
          label="Name"
          control={control}
          name={PORTFOLIO_SCHEMA_FIELDS.NAME}
        />
        <Textarea
          label="Description"
          control={control}
          name={PORTFOLIO_SCHEMA_FIELDS.DESCRIPTION}
        />
        <FileUpload control={control} name={PORTFOLIO_SCHEMA_FIELDS.IMAGES} />
        <Button text="Save" onClick={handleSubmit(handleFormSubmit)} />
      </Wrapper>
    </Modal>
  );
};
