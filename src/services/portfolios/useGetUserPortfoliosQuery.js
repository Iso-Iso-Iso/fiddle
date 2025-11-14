import "client-only";
import { useQuery } from "@tanstack/react-query";
import { getUserPortfoliosAction } from "@/actions/userPortfolio/getUserPortfoliosAction";

export const getUserPortfoliosQueryKeys = () => ["USER_PORTFOLIO_QUERY_KEYS"];

export const useGetUserPortfoliosQuery = () => {
  return useQuery({
    queryFn: getUserPortfoliosAction,
    queryKey: getUserPortfoliosQueryKeys(),
  });
};
