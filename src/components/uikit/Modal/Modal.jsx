"use client";
import React from "react";
import { ModalBody } from "@/components/uikit/Modal/modal.styles";
import { useModalActions, useSelectIsShowModal } from "@/stores/modalStore";
import { Fade, Modal as MuiModal } from "@mui/material";

export const Modal = ({ children, variant = "small" }) => {
  const isShowModal = useSelectIsShowModal();
  const { setCloseModal, setUnmountModal } = useModalActions();

  return (
    <MuiModal open={isShowModal} onClose={setCloseModal}>
      <Fade in={isShowModal} onExited={setUnmountModal}>
        <ModalBody variant={variant}>{children}</ModalBody>
      </Fade>
    </MuiModal>
  );
};
