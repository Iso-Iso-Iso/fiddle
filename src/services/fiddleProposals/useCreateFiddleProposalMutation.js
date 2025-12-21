import { useMutation } from "@tanstack/react-query";
import { createFiddleProposalAction } from "@/actions/fiddleProposals/createFiddleProposalAction";
import { getQueryClient } from "@/utils/getQueryClient";
import { getProposalsBalanceQueryKeys } from "@/services/proposalsBalance/useGetProposalsBalanceQuery";

export const useCreateFiddleProposalMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: createFiddleProposalAction,
    onSuccess: () =>
      queryClient.refetchQueries({ queryKey: getProposalsBalanceQueryKeys() }),
  });
};
