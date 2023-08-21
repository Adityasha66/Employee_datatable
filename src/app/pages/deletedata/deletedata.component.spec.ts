import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedataComponent } from './deletedata.component';

describe('DeletedataComponent', () => {
  let component: DeletedataComponent;
  let fixture: ComponentFixture<DeletedataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedataComponent]
    });
    fixture = TestBed.createComponent(DeletedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
