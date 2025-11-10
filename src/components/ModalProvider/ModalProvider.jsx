"use client";
import React, { useRef } from "react";
import {
  createModalStore,
  ModalStoreContext,
  useSelectModal,
} from "@/stores/modalStore";
import { MODAL_NAMES } from "@/constants/modalNames";
import { ManagePortfolioModal } from "@/components/modals/ManagePortfolioModal/ManagePortfolioModal";
import { FiddleDrawer } from "@/components/modals/FiddleDrawer/FiddleDrawer";

const modalRenderers = {
  [MODAL_NAMES.MANAGE_PORTFOLIO_MODAL]: ManagePortfolioModal,
  [MODAL_NAMES.FIDDLE_DRAWER]: FiddleDrawer,
};

export const ModalProvider = ({ children }) => {
  const modalStoreRef = useRef(null);

  if (!modalStoreRef.current) {
    modalStoreRef.current = createModalStore();
  }

  const modal = useSelectModal(modalStoreRef.current);

  const ModalRenderer = modalRenderers[modal?.name];

  return (
    <ModalStoreContext.Provider value={modalStoreRef.current}>
      {children}
      {modal && <ModalRenderer {...modal.props} />}
    </ModalStoreContext.Provider>
  );
};
