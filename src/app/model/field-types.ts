import InputDefinition, { InputType, InputTypes } from './input-definition';

const createField = (type: InputType): InputDefinition => ({
  type,
  label: `New ${type[0].toUpperCase() + type.slice(1)} Field`,
  key: `new${type[0].toUpperCase() + type.slice(1)}Field`,
  value: '',
  ...(type === InputTypes.SELECT || type === InputTypes.RADIO ? { options: [] } : {}),
});

export const fieldTypes = [
  { label: 'Text', value: InputTypes.TEXT, icon: 'text_fields' },
  { label: 'Email', value: InputTypes.EMAIL, icon: 'email' },
  { label: 'Select', value: InputTypes.SELECT, icon: 'list' },
  { label: 'Date', value: InputTypes.DATE, icon: 'calendar_today' },
  { label: 'Date Time', value: InputTypes.DATETIME, icon: 'schedule' },
  // { label: 'Radio', value: InputTypes.RADIO, icon: 'radio_button_checked' },
  { label: 'Checkbox', value: InputTypes.CHECKBOX, icon: 'check_box' },
  { label: 'Header', value: InputTypes.HEADER, icon: 'title' },
  { label: 'Paragraph', value: InputTypes.PARAGRAPH, icon: 'format_paragraph' },
].map((t) => ({
  ...t,
  field: createField(t.value),
}));
