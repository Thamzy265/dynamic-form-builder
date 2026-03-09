import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTypesList } from './field-types-list';

describe('FieldTypesList', () => {
  let component: FieldTypesList;
  let fixture: ComponentFixture<FieldTypesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldTypesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldTypesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
