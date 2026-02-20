interface InputDefinition {
  key: string;
  label: string;
  type: InputType;
  value: any;
  placeholder?: string;
  description?: string;
  required?: boolean;
  options?: { label: string; value: any }[];
  hint?: string;
}

export const InputTypes = {
  TEXT: 'text',
  TEXTAREA: 'textarea',
  NUMBER: 'number',
  DATE: 'date',
  DATETIME: 'datetime',
  SELECT: 'select',
  RADIO: 'radio',
  CHECKBOX: 'checkbox',
  EMAIL: 'email',
  PASSWORD: 'password',
  HEADER: 'header',
  PARAGRAPH: 'paragraph',
} as const;

export type InputType = (typeof InputTypes)[keyof typeof InputTypes];

export default InputDefinition;
