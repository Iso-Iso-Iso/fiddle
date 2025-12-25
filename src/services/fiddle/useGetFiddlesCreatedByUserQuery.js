import { useQuery } from "@tanstack/react-query";
import { getFiddlesCreatedByUserAction } from "@/actions/fiddles/getFiddlesCreatedByUserAction";

export const getFiddlesCreatedByUserQueryKeys = () => ["FIDDLES_CREATED_BY_USER"];

export const useGetFiddlesCreatedByUserQuery = () =>
  useQuery({
    queryFn: getFiddlesCreatedByUserAction,
    queryKey: getFiddlesCreatedByUserQueryKeys(),
  });
