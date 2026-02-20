import { Component, effect, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormBuilder as FormBuilderService } from '../../services/formBuilder/form-builder';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-field-properties',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggle,
  ],
  templateUrl: './field-properties.html',
  styleUrl: './field-properties.css',
})
export class FieldProperties {
  public formBuilderService = inject(FormBuilderService);
  private fb = inject(FormBuilder);

  propertiesForm!: FormGroup;
  selectedField: any = null;

  constructor() {
    effect(() => {
      const currentValue = this.formBuilderService.selectedField();

      if (currentValue !== null) {
        this.selectedField = currentValue;
        this.buildPropertiesForm();
      }
    });
  }

  buildPropertiesForm() {
    const propertiesFormControls: any = {};

    propertiesFormControls['label'] = new FormControl(this.selectedField.label);
    propertiesFormControls['key'] = new FormControl(this.selectedField.key);
    propertiesFormControls['description'] = new FormControl(this.selectedField.description);
    propertiesFormControls['placeholder'] = new FormControl(this.selectedField.placeholder);
    propertiesFormControls['type'] = new FormControl(this.selectedField.type);
    propertiesFormControls['required'] = new FormControl(this.selectedField.required);
    propertiesFormControls['options'] = this.fb.array([]);

    this.propertiesForm = this.fb.group(propertiesFormControls);
  }

  addOption() {
    this.optionsArray.push(
      this.fb.group({
        value: [''],
        label: [''],
      }),
    );
  }

  removeOption(index: number) {
    this.optionsArray.removeAt(index);
  }

  get optionsArray(): FormArray {
    return this.propertiesForm.get('options') as FormArray;
  }

  saveProperties() {
    console.log('Saving properties for field', this.formBuilderService.selectedField);
    console.log('Properties form value', this.propertiesForm.value);
  }
  cancelProperties() {
    this.propertiesForm.reset();
  }
}
