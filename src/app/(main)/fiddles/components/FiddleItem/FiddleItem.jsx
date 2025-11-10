"use client";
import React from "react";
import {
  CreatorWrapper,
  Heading,
  ProposalItemWrapper,
} from "./fiddleItem.styles";
import { Typography } from "@/components/uikit/Typography/Typography";
import { Avatar } from "@/components/uikit/Avatar/Avatar";
import { TextEditViewer } from "@/components/TextEditViewer/TextEditViewer";
import { IconButton } from "@/components/uikit/IconLink/IconButton";
import Link from "next/link";
import { useModalActions } from "@/stores/modalStore";
import { MODAL_NAMES } from "@/constants/modalNames";

export const FiddleItem = ({ fiddle, isEditable }) => {
  const { setActiveModal } = useModalActions();
  const handlePropagation = (e) => e.stopPropagation();

  return (
    <ProposalItemWrapper
      onClick={() => setActiveModal(MODAL_NAMES.FIDDLE_DRAWER, { fiddle })}
    >
      <Heading>
        <Link onClick={handlePropagation} href={`/fiddles/${fiddle.id}`}>
          <Typography text={fiddle.name} />
        </Link>
        {isEditable && (
          <Link onClick={handlePropagation} href={`/fiddles/${fiddle.id}/edit`}>
            <IconButton name="edit" />
          </Link>
        )}
      </Heading>
      <TextEditViewer content={fiddle.content} />
      <CreatorWrapper>
        <Avatar
          text={`${fiddle.user.firstName[0]}${fiddle.user.lastName[0]}`}
        />
        <Typography text={`${fiddle.user.firstName} ${fiddle.user.lastName}`} />
      </CreatorWrapper>
    </ProposalItemWrapper>
  );
};
