import { Component, Input, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import InputDefinition from '../../model/input-definition';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-date-input',
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatDatepickerToggle,
    MatFormFieldModule,
    MatIcon,
    MatInputModule,
  ],
  templateUrl: './date-input.html',
  styleUrl: './date-input.css',
})
export class DateInput {
  form = input.required<FormGroup>();
  field = input.required<InputDefinition>();
}
