"use client";
import React from "react";
import { Slide, Drawer as MuiDrawer } from "@mui/material";
import { useModalActions, useSelectIsShowModal } from "@/stores/modalStore";
import { Wrapper } from "./drawer.styles";

export const Drawer = ({ children }) => {
  const isShowModal = useSelectIsShowModal();
  const { setCloseModal, setUnmountModal } = useModalActions();

  return (
    <MuiDrawer
      open={isShowModal}
      onClose={setCloseModal}
      anchor="right"
      slots={{ transition: Slide }}
      slotProps={{
        transition: {
          in: isShowModal,
          onExited: () => {
            setUnmountModal();
          },
        },
      }}
    >
      <Wrapper>{children}</Wrapper>
    </MuiDrawer>
  );
};
