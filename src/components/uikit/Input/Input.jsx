import MuiTextField from "@mui/material/TextField";
import { useController } from "react-hook-form";

export const Input = ({ label, size = "small", control, name }) => {
  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <MuiTextField label={label} size={size} value={value} onChange={onChange} />
  );
};
