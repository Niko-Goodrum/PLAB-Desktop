type inputType = "text" | "password";

export interface FilledTextFieldProps {
  type: inputType;
  text?: string;
  width?: string;
  placeholder?: string;
  isLabel?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
}
