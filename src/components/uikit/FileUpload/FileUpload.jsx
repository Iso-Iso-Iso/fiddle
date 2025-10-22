import React from "react";
import { Button } from "@mui/material";
import {
  CloseIcon,
  ImageGrid,
  ImageItem,
  VisuallyHiddenInput,
} from "@/components/uikit/FileUpload/sileUpload.styles";
import { Icon } from "@/components/uikit/Icon/Icon";
import { useController } from "react-hook-form";
import { Wrapper } from "./sileUpload.styles";
import Image from "next/image";

export const FileUpload = ({ control, name, multiple, upload }) => {
  const {
    field: { value, onChange },
  } = useController({ control, name, defaultValue: [] });

  const isDisabled = !multiple && value.length > 0;

  const handleUpload = (e) => {
    const mapped = [...e.target.files].map((item) => ({
      file: item,
      url: URL.createObjectURL(item),
    }));

    onChange([...value, ...mapped]);
  };

  const handleRemove = (index) => () => {
    onChange(value.toSpliced(index, 1));
  };

  return (
    <Wrapper>
      <Button
        component="label"
        variant="outlined"
        startIcon={<Icon name="cloudUpload" />}
        disabled={isDisabled}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={handleUpload}
          multiple={multiple}
          disabled={isDisabled}
        />
      </Button>
      <ImageGrid>
        {value.map((item, index) => (
          <ImageItem key={item.url}>
            <Image alt="Uploaded image" src={item.url} width={50} height={50} />
            <CloseIcon onClick={handleRemove(index)}>
              <Icon name="close" size={16} />
            </CloseIcon>
          </ImageItem>
        ))}
      </ImageGrid>
    </Wrapper>
  );
};
