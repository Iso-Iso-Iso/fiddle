import { Box, styled } from "@mui/material";

export const FiddleWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  marginBottom: theme.spacing(2),
}));

export const List = styled(Box)({
  flex: 1,
});

export const PaginationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
}));

export const Filters = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "200px 200px 1fr 60px",
  gap: theme.spacing(2),
  alignItems: "center",
}));

export const Search = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  width: 240,
}));
