import { Component, input } from '@angular/core';
import InputDefinition from '../../model/input-definition';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox-input',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatHint, MatCheckboxModule],
  templateUrl: './checkbox-input.html',
  styleUrl: './checkbox-input.css',
})
export class CheckboxInput {
  form = input.required<FormGroup>();
  field = input.required<InputDefinition>();
}
