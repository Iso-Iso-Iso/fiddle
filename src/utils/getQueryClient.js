import { isServer, QueryClient } from "@tanstack/react-query";

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

let queryInstance = null;

export const getQueryClient = () => {
  if (isServer) {
    return createQueryClient();
  }

  if (!queryInstance) {
    queryInstance = createQueryClient();
  }

  return queryInstance;
};
