import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormBuilder } from './pages/dynamic-form-builder/dynamic-form-builder';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DynamicFormBuilder],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('msa_crm');
}
