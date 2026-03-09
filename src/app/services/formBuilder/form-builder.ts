import { Injectable, Input, signal } from '@angular/core';
import InputDefinition, { FormItem, InputTypes, RowContainer } from '../../model/input-definition';
import { isRowContainer } from '../../utils/util';

@Injectable({
  providedIn: 'root',
})
export class FormBuilder {
  // config: InputDefinition[] = [
  //   // {
  //   //   type: 'text',
  //   //   label: 'First Name',
  //   //   name: 'firstName',
  //   //   value: '',
  //   // },
  //   // {
  //   //   type: 'text',
  //   //   label: 'Last Name',
  //   //   name: 'lastName',
  //   //   value: '',
  //   // },
  //   // {
  //   //   type: 'email',
  //   //   label: 'Email',
  //   //   name: 'email',
  //   //   value: '',
  //   // },
  //   // {
  //   //   type: 'select',
  //   //   label: 'Country',
  //   //   name: 'country',
  //   //   value: '',
  //   //   options: [
  //   //     { label: 'United States', value: 'us' },
  //   //     { label: 'Canada', value: 'ca' },
  //   //     { label: 'United Kingdom', value: 'uk' },
  //   //   ],
  //   // },
  // ];

  config: FormItem[] = [
    {
      type: InputTypes.ROW,
      fields: [
        {
          type: InputTypes.TEXT,
          label: 'First Name',
          key: 'firstName',
          value: '',
        },
        {
          type: InputTypes.TEXT,
          label: 'Last Name',
          key: 'lastName',
          value: '',
        },
        {
          type: InputTypes.SELECT,
          label: 'Country',
          key: 'country',
          value: '',
          options: [
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'United Kingdom', value: 'uk' },
          ],
        },
        { type: InputTypes.TEXTAREA, label: 'Address', key: 'address', value: '' },
      ],
    },
    { type: InputTypes.EMAIL, label: 'Email', key: 'email', value: '' },
  ];
  selectedField = signal<InputDefinition | null>(null);

  setSelectedField(newValue: InputDefinition | null) {
    this.selectedField.set(newValue);
  }

  constructor() {}

  addField(field: InputDefinition) {
    this.config.push(field);
  }

  removeFieldRecursive(nodes: FormItem[], key: string): FormItem[] {
    return nodes.reduce<FormItem[]>((acc, node) => {
      if (isRowContainer(node)) {
        acc.push({ ...node, fields: this.removeFieldRecursive(node.fields, key) });
      } else if (node.key !== key) {
        acc.push(node);
      }
      return acc;
    }, []);
  }

  removeField(key: string) {
    this.config = this.removeFieldRecursive(this.config, key);
    if (this.selectedField() && this.selectedField()?.key === key) {
      this.setSelectedField(null);
    }
  }

  updateField(key: string, updatedField: InputDefinition) {
    // this.config = this.config.map((field) => (field.key === key ? updatedField : field));
    this.config = this.updateFieldRecursive(this.config, key, updatedField);
  }

  updateFieldRecursive(nodes: FormItem[], key: string, updatedField: InputDefinition): FormItem[] {
    return nodes.map((node) => {
      if (isRowContainer(node)) {
        return { ...node, fields: this.updateFieldRecursive(node.fields, key, updatedField) };
      }
      if (node.key === key) {
        return updatedField;
      }
      return node;
    });
  }
}
