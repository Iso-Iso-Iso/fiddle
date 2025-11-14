import "client-only";

import { useMutation } from "@tanstack/react-query";
import { createUserPortfolioAction } from "@/actions/userPortfolio/createUserPortfolioAction";
import { getQueryClient } from "@/utils/getQueryClient";
import { getUserPortfoliosQueryKeys } from "@/services/portfolios/useGetUserPortfoliosQuery";

export const useCreatePortfolioMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: createUserPortfolioAction,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getUserPortfoliosQueryKeys() }),
  });
};
