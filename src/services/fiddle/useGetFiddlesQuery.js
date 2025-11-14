import { useQuery } from "@tanstack/react-query";
import { getFiddlesAction } from "@/actions/fiddles/getFiddlesAction";

export const getFiddlesQueryKey = (params) => ["FIDDLES", params];

export const useGetFiddlesQuery = ({ page }) =>
  useQuery({
    queryFn: () => getFiddlesAction({ page }),
    queryKey: getFiddlesQueryKey({ page }),
  });
