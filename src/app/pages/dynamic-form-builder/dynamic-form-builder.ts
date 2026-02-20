import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder as FormBuilderService } from '../../services/formBuilder/form-builder';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FieldProperties } from '../../components/field-properties/field-properties';
import { fieldTypes } from '../../model/field-types';

@Component({
  selector: 'app-dynamic-form-builder',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    FieldProperties,
  ],
  templateUrl: './dynamic-form-builder.html',
  styleUrl: './dynamic-form-builder.css',
})
export class DynamicFormBuilder implements OnInit {
  public formBuilderService = inject(FormBuilderService);
  private fb = inject(FormBuilder);

  form!: FormGroup;
  propertiesForm!: FormGroup;
  selectedField: any = null;
  selectOptions: any[] = [];
  fieldTypes = fieldTypes;

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    const formControls: any = {};
    this.formBuilderService.config.forEach((input: any) => {
      formControls[input.key] = new FormControl(input.value || '');
    });
    this.form = this.fb.group(formControls);
  }

  submitForm() {
    // console.log(this.form.value);
  }

  addField(event: CdkDragDrop<any[]>) {
    const id = crypto.randomUUID();
    var data = event.previousContainer.data[event.previousIndex];
    const fieldType = { ...data };
    fieldType.field.key = id;
    fieldType.field.label = `New ${fieldType.label} ${this.formBuilderService.config.length + 1}`;
    this.formBuilderService.addField(fieldType.field);
    this.form.addControl(fieldType.field.key, new FormControl(fieldType.field.value));
    this.formBuilderService.setSelectedField(fieldType.field);
  }

  removeField(fieldName: string) {
    // this.formBuilderService.removeField(fieldName);
    // this.form.removeControl(fieldName);
  }
}
