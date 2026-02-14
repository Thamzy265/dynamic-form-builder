import { Component, input } from '@angular/core';
import InputDefinition from '../../model/input-definition';

@Component({
  selector: 'app-text-input',
  imports: [],
  templateUrl: './text-input.html',
  styleUrl: './text-input.css',
})
export class TextInput {
  inputDefinition = input<InputDefinition>();
}
