import MuiTextField from "@mui/material/TextField";

export const Input = ({ label, size = "small" }) => (
  <MuiTextField label={label} size={size} />
);
