import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import InputDefinition from '../../model/input-definition';

@Component({
  selector: 'app-radio-input',
  imports: [],
  templateUrl: './radio-input.html',
  styleUrl: './radio-input.css',
})
export class RadioInput {
  form = input.required<FormGroup>();
  field = input.required<InputDefinition>();
}
