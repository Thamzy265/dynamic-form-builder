import { Form } from '@angular/forms';
import InputDefinition, { FormItem, InputTypes, RowContainer } from '../model/input-definition';

export const isRowContainer = (item: FormItem): item is RowContainer => {
  return item.type === InputTypes.ROW;
};

export const isInputDefinition = (item: FormItem): item is InputDefinition => {
  return item.type !== InputTypes.ROW;
};
