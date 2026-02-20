import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldProperties } from './field-properties';

describe('FieldProperties', () => {
  let component: FieldProperties;
  let fixture: ComponentFixture<FieldProperties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldProperties]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldProperties);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
