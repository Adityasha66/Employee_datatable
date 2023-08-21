import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditData1Component } from './edit-data1.component';

describe('EditData1Component', () => {
  let component: EditData1Component;
  let fixture: ComponentFixture<EditData1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditData1Component]
    });
    fixture = TestBed.createComponent(EditData1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
