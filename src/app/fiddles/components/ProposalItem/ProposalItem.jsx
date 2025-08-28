import React from "react";
import {
  CreatorWrapper,
  PageContent,
  ProposalItemWrapper,
} from "./proposalItem.styles";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { Box } from "@mui/material";

export const ProposalItem = ({ proposal }) => {
  return (
      <ProposalItemWrapper>
        <Typography text={proposal.title} />
        <Typography text={proposal.content} />
        <CreatorWrapper>
          <Avatar text="JD" />
          <Typography
            text={`${proposal.creator.firstName} ${proposal.creator.lastName}`}
          />
        </CreatorWrapper>
      </ProposalItemWrapper>

  );
};
