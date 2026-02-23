import { Component, input, output } from '@angular/core';
import InputDefinition, { InputTypes } from '../../model/input-definition';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import {
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatHint,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-text-input',
  imports: [
    MatIcon,
    MatFormField,
    MatFormFieldModule,
    MatHint,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './text-input.html',
  styleUrl: './text-input.css',
})
export class TextInput {
  field = input.required<InputDefinition>();
  form = input.required<FormGroup>();
  removeField = output<string>();

  isDateInput(): boolean {
    return this.field()?.type === InputTypes.DATE;
  }
}
