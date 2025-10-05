import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

const iconMap = {
  edit: EditIcon,
  bold: FormatBoldIcon,
  italic: FormatItalicIcon,
  underline: FormatUnderlinedIcon,
  sadEmoji: SentimentVeryDissatisfiedIcon,
  cloudUpload: CloudUploadIcon,
  close: CloseIcon,
};

export const Icon = ({ name, size = 20 }) => {
  const IconRenderer = iconMap[name];

  return <IconRenderer sx={{ fontSize: size }} />;
};
