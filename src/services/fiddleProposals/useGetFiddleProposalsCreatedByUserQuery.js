import { useQuery } from "@tanstack/react-query";
import { getFiddleProposalsCreatedByUserAction } from "@/actions/fiddleProposals/getFiddleProposalsCreatedByUserAction";

export const getFiddleProposalsCreatedByUserQueryKeys = () => [
  "FIDDLE_PROPOSALS_BY_USER",
];

export const useGetFiddleProposalsCreatedByUserQuery = () =>
  useQuery({
    queryFn: getFiddleProposalsCreatedByUserAction,
    queryKey: getFiddleProposalsCreatedByUserQueryKeys(),
  });
