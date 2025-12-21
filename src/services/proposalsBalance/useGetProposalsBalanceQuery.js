import { useQuery } from "@tanstack/react-query";
import { getProposalsBalanceAction } from "@/actions/proposalsBalance/getProposalsBalanceAction";

export const getProposalsBalanceQueryKeys = () => ["PROPOSALS_BALANCE"];

export const useGetProposalsBalanceQuery = () => {
  return useQuery({
    queryFn: getProposalsBalanceAction,
    queryKey: getProposalsBalanceQueryKeys(),
  });
};
