import { Component, OnInit } from '@angular/core';
import { TextInput } from '../../components/text-input/text-input';
import { FormBuilder as FormBuilderService } from '../../services/formBuilder/form-builder';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-builder',
  imports: [TextInput, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-builder.html',
  styleUrl: './dynamic-form-builder.css',
})
export class DynamicFormBuilder implements OnInit {
  form!: FormGroup;

  constructor(
    public formBuilderService: FormBuilderService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    const formControls: any = {};
    this.formBuilderService.config.forEach((input) => {
      formControls[input.name] = new FormControl(input.value || '');
    });
    this.form = this.fb.group(formControls);
  }

  submitForm() {
    console.log(this.form.value);
  }
}
