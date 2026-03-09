import { Component } from '@angular/core';
import { fieldTypes } from '../../model/field-types';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-field-types-list',
  imports: [DragDropModule, MatIconModule],
  templateUrl: './field-types-list.html',
  styleUrl: './field-types-list.css',
})
export class FieldTypesList {
  fieldTypes = fieldTypes;
}
