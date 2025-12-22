"use client";
import React, { useState } from "react";
import { Drawer } from "@/components/uikit/Drawer/Drawer";
import { Typography } from "@/components/uikit/Typography/Typography";
import { TextEditViewer } from "@/components/TextEditViewer/TextEditViewer";
import {
  FiddleContent,
  ImageGrid,
  ProposalWrapper,
} from "./fiddleDrawer.styles";
import Image from "next/image";
import { Divider } from "@mui/material";
import { Button } from "@/components/uikit/Button/Button";
import { FiddleSubmitSection } from "@/components/modals/FiddleDrawer/components/FiddleSubmitSection/FiddleSubmitSection";

export const FiddleDrawer = ({ fiddle, isSubmitAllowed }) => {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <Drawer>
      <FiddleContent>
        <Typography text={fiddle.name} variant="h4" />
        <TextEditViewer content={fiddle.content} />
        <ImageGrid>
          {fiddle.images.map((image) => (
            <Image
              key={image}
              width={130}
              height={80}
              alt={fiddle.name}
              src={image}
            />
          ))}
        </ImageGrid>
      </FiddleContent>
      <Divider />
      {isSubmitAllowed && (
        <ProposalWrapper>
          {isSubmit ? (
            <FiddleSubmitSection />
          ) : (
            <Button
              fullWidth
              variant="outlined"
              text="Submit proposal"
              onClick={() => setIsSubmit(true)}
            />
          )}
        </ProposalWrapper>
      )}
    </Drawer>
  );
};
