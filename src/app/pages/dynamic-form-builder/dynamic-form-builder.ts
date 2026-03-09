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
import { TextInput } from '../../components/text-input/text-input';
import InputDefinition, {
  FormItem,
  InputType,
  InputTypes,
  RowContainer,
} from '../../model/input-definition';
import { SelectInput } from '../../components/select-input/select-input';
import { DateInput } from '../../components/date-input/date-input';
import { CheckboxInput } from '../../components/checkbox-input/checkbox-input';
import { RadioInput } from '../../components/radio-input/radio-input';
import { FieldTypesList } from '../../components/field-types-list/field-types-list';
import { isInputDefinition, isRowContainer } from '../../utils/util';

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
    TextInput,
    SelectInput,
    DateInput,
    CheckboxInput,
    RadioInput,
    FieldTypesList,
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
  inputTypes = InputTypes;

  textLikeInputTypes: InputType[] = [
    InputTypes.TEXT,
    InputTypes.EMAIL,
    InputTypes.NUMBER,
    InputTypes.PASSWORD,
  ];
  dateLikeInputTypes: InputType[] = [InputTypes.DATE, InputTypes.DATETIME];

  isInputDefinition = isInputDefinition;
  isRowContainer = isRowContainer;

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
    var data = event.previousContainer.data[event.previousIndex];
    const fieldType = { ...data };
    const count = this.formBuilderService.config.length + 1;
    fieldType.field.key = `field-${count}`;
    fieldType.field.label += `${count}`;
    this.formBuilderService.addField(fieldType.field);
    this.form.addControl(fieldType.field.key, new FormControl(fieldType.field.value));
    this.formBuilderService.setSelectedField(fieldType.field);
  }

  removeField(key: string) {
    this.formBuilderService.removeField(key);
    this.form.removeControl(key);
  }
}
