import { useController } from "react-hook-form";
import { StyledTextField } from "./input.styles";

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
    <StyledTextField
      fullWidth
      label={label}
      size={size}
      value={value}
      onChange={handleChange}
      type={inputType}
    />
  );
};

