import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATA1Component } from './data1.component';

describe('DATA1Component', () => {
  let component: DATA1Component;
  let fixture: ComponentFixture<DATA1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DATA1Component]
    });
    fixture = TestBed.createComponent(DATA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
