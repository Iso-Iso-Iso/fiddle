"use client";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";

export const QueryProvider = ({ children }) => {
  const client = getQueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
