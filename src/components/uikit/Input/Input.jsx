import MuiTextField from "@mui/material/TextField";
import { useController } from "react-hook-form";

export const Input = ({ label, size = "small", control, name, inputType }) => {
  const {
    field: { value, onChange },
  } = useController({ control, name });

  const handleChange = (e) => {
    const value = e.target.value;

    if (inputType === "number") {
      onChange(+value);

      return;
    }

    onChange(value);
  };

  return (
    <MuiTextField
      fullWidth
      label={label}
      size={size}
      value={value}
      onChange={handleChange}
      type={inputType}
    />
  );
};
