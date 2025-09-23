"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/uikit/Button/Button";
import { Collapse } from "./collapsableDescription.styles";
import { Typography } from "@/components/uikit/Typography/Typography";

const MAX_TEXT_FIELD_SIZE = 70;

export const CollapsableDescription = ({ text }) => {
  const typographyRef = useRef(null);
  const [isShowToggleButton, setIsShowToggleButton] = useState(true);
  const [defaultToggleHeight, setDefaultToggleHeight] =
    useState(MAX_TEXT_FIELD_SIZE);
  const [isOpen, setIsOpen] = useState(false);
  const [isCropText, setIsCropText] = useState(true);

  useEffect(() => {
    const height = typographyRef.current.offsetHeight;

    if (height < MAX_TEXT_FIELD_SIZE) {
      setIsShowToggleButton(false);
      setDefaultToggleHeight(height);
    }
  }, []);

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
      <Collapse
        in={isOpen}
        onExited={handleAnimationEnd}
        collapsedSize={defaultToggleHeight}
      >
        <Typography
          typographyRef={typographyRef}
          text={text}
          variant={isCropText ? "profile" : "body1"}
        />
      </Collapse>
      {isShowToggleButton && <Button text="Show more" onClick={handleToggle} />}
    </>
  );
};
