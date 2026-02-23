import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import InputDefinition from '../../model/input-definition';

@Component({
  selector: 'app-select-input',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './select-input.html',
  styleUrl: './select-input.css',
})
export class SelectInput {
  form = input.required<FormGroup>();
  field = input.required<InputDefinition>();
}
