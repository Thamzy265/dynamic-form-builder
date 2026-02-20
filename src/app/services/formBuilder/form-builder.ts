import { Injectable, Input, signal } from '@angular/core';
import InputDefinition from '../../model/input-definition';

@Injectable({
  providedIn: 'root',
})
export class FormBuilder {
  config: InputDefinition[] = [
    // {
    //   type: 'text',
    //   label: 'First Name',
    //   name: 'firstName',
    //   value: '',
    // },
    // {
    //   type: 'text',
    //   label: 'Last Name',
    //   name: 'lastName',
    //   value: '',
    // },
    // {
    //   type: 'email',
    //   label: 'Email',
    //   name: 'email',
    //   value: '',
    // },
    // {
    //   type: 'select',
    //   label: 'Country',
    //   name: 'country',
    //   value: '',
    //   options: [
    //     { label: 'United States', value: 'us' },
    //     { label: 'Canada', value: 'ca' },
    //     { label: 'United Kingdom', value: 'uk' },
    //   ],
    // },
  ];

  fieldTypes = [
    {
      label: 'Text',
      value: 'text',
      field: { type: 'text', label: 'New Text Field', name: 'newTextField', value: '' },
    },
    {
      label: 'Email',
      value: 'email',
      field: { type: 'email', label: 'New Email Field', name: 'newEmailField', value: '' },
    },
    {
      label: 'Select',
      value: 'select',
      field: {
        type: 'select',
        label: 'New Select Field',
        name: 'newSelectField',
        value: '',
        options: [],
      },
    },
  ];

  selectedField = signal<InputDefinition | null>(null);

  // Method to update the field
  setSelectedField(newValue: InputDefinition | null) {
    this.selectedField.set(newValue);
  }

  constructor() {}

  addField(field: InputDefinition) {
    this.config.push(field);
  }

  removeField(fieldName: string) {
    this.config = this.config.filter((field) => field.key !== fieldName);
  }
}
