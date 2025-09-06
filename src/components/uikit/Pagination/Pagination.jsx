"use client";
import React from "react";
import MuiPagination from "@mui/material/Pagination";
import { useRouter } from "next/navigation";

export const Pagination = ({ page, onChange, count }) => {
  const router = useRouter();

  const handleChange = (_, page) => {
    router.push("?page=" + page);
  };
  return (
    <MuiPagination
      page={1}
      onChange={handleChange}
      count={count}
      size="small"
    />
  );
};
