import { Injectable, Input } from '@angular/core';
import InputDefinition from '../../model/input-definition';

@Injectable({
  providedIn: 'root',
})
export class FormBuilder {
  config: InputDefinition[] = [
    {
      type: 'text',
      label: 'First Name',
      name: 'firstName',
      value: '',
    },
    {
      type: 'text',
      label: 'Last Name',
      name: 'lastName',
      value: '',
    },
    {
      type: 'email',
      label: 'Email',
      name: 'email',
      value: '',
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      value: '',
      options: [
        { label: 'United States', value: 'us' },
        { label: 'Canada', value: 'ca' },
        { label: 'United Kingdom', value: 'uk' },
      ],
    },
  ];

  constructor() {}
}
