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
import { uploadFileOnBucket } from "@/utils/uploadFileOnBucket";

export const ManagePortfolioModal = () => {
  const { control, handleSubmit, watch } = useForm({
    resolver: portfolioResolver,
    defaultValues: portfolioDefaultValues,
  });

  const handleFormSubmit = async (data) => {
    const imageSlugs = await Promise.all(
      data[PORTFOLIO_SCHEMA_FIELDS.IMAGES].map((item) =>
        uploadFileOnBucket(item.file)
      )
    );

    createUserPortfolioAction({
      name: data[PORTFOLIO_SCHEMA_FIELDS.NAME],
      description: data[PORTFOLIO_SCHEMA_FIELDS.DESCRIPTION],
      images: imageSlugs,
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
        <FileUpload
          control={control}
          name={PORTFOLIO_SCHEMA_FIELDS.IMAGES}
          multiple
        />
        <Button text="Save" onClick={handleSubmit(handleFormSubmit)} />
      </Wrapper>
    </Modal>
  );
};
