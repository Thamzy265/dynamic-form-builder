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
  ROW: 'row',
} as const;

export type InputType = (typeof InputTypes)[keyof typeof InputTypes];

export interface RowContainer {
  type: InputType;
  fields: FormItem[];
}

export type FormItem = InputDefinition | RowContainer;

export default InputDefinition;
