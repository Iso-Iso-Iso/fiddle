import React from "react";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Icon } from "@/components/uikit/Icon/Icon";
import { Accordion, AccordionSummary, AccordionDetails } from "./spoiler.styles";

export const Spoiler = ({ title, content }) => {
  return (
    <Accordion disableGutters elevation={0}>
      <AccordionSummary expandIcon={<Icon name="expandMore" size={16} />}>
        <Typography variant="body1" text={title} />
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" text={content} color="textSecondary" />
      </AccordionDetails>
    </Accordion>
  );
};

