"use server";

import { getFiddlesWithPagination } from "@/services/fiddle/getFiddlesWithPagination";

export const getFiddlesAction = async ({ page }) =>
  getFiddlesWithPagination({ page });
