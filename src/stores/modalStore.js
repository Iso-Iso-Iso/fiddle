import "client-only";
import { createStore } from "zustand/vanilla";
import { createContext } from "react";
import { useStoreByContext } from "@/hooks/useStoreByContext";
import { useStore } from "zustand/react";

export const ModalStoreContext = createContext();

export const createModalStore = () =>
  createStore()((set) => ({
    modal: null,
    isShowModal: false,
    actions: {
      setActiveModal: (name, staticProps) =>
        set({ modal: { name, props: staticProps }, isShowModal: true }),
      setCloseModal: () => set({ isShowModal: false }),
      setUnmountModal: () => set({ modal: null }),
    },
  }));

export const useSelectModal = (store) =>
  useStore(store, (state) => state.modal);

export const useSelectIsShowModal = () =>
  useStoreByContext(ModalStoreContext, (state) => state.isShowModal);
export const useModalActions = () =>
  useStoreByContext(ModalStoreContext, (state) => state.actions);
