import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedIcon from "@mui/icons-material/Verified";
import GppGoodIcon from "@mui/icons-material/GppGood";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const iconMap = {
  edit: EditIcon,
  bold: FormatBoldIcon,
  italic: FormatItalicIcon,
  underline: FormatUnderlinedIcon,
  sadEmoji: SentimentVeryDissatisfiedIcon,
  cloudUpload: CloudUploadIcon,
  close: CloseIcon,
  eye: VisibilityIcon,
  lightbulb: LightbulbIcon,
  search: SearchIcon,
  verified: VerifiedIcon,
  secure: GppGoodIcon,
  person: PersonIcon,
  postAdd: PostAddIcon,
  personSearch: PersonSearchIcon,
  payment: PaymentIcon,
  supportAgent: SupportAgentIcon,
};

const colorMap = {
  primary: "primary",
  secondary: "secondary",
};

export const Icon = ({ name, size = 20, color }) => {
  const IconRenderer = iconMap[name];

  return <IconRenderer sx={{ fontSize: size }} color={colorMap[color]} />;
};
