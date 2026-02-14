interface InputDefinition {
  type: string;
  label: string;
  name: string;
  value: any;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: any }[];
  hint?: string;
}

export default InputDefinition;
