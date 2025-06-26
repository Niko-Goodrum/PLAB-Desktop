type inputType = "text" | "password";

export interface FilledTextFieldProps {
  value: string;
  type: inputType;
  text?: string;
  width?: string;
  placeholder?: string;
  isLabel?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  handleKeyDown?: (e: KeyboardEvent) => void;
}
