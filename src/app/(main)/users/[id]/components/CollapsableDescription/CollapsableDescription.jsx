"use client";
import React, { useState } from "react";
import { Button } from "@/components/uikit/Button/Button";
import { Collapse } from "./collapsableDescription.styles";
import { Typography } from "@/components/uikit/Typography/Typography";

export const CollapsableDescription = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCropText, setIsCropText] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsCropText(false);
  };

  // TODO: investigate better solution
  const handleAnimationEnd = () => {
    setIsCropText(true);
  };

  return (
    <>
      <Collapse in={isOpen} onExited={handleAnimationEnd} collapsedSize={70}>
        <Typography text={text} variant={isCropText ? "profile" : "body1"} />
      </Collapse>
      <Button text="Show more" onClick={handleToggle} />
    </>
  );
};
