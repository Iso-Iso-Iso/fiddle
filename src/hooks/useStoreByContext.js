import "client-only";
import { useContext } from "react";
import { useStore } from "zustand/react";

export const useStoreByContext = (context, selector) => {
  const storeContext = useContext(context);

  if (!storeContext) {
    throw new Error("Store context not found");
  }

  return useStore(storeContext, selector);
};
