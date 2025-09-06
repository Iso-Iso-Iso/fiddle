import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const iconMap = {
  edit: EditIcon,
};

export const Icon = ({ name }) => {
  const IconRenderer = iconMap[name];

  return <IconRenderer />;
};
