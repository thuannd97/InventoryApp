import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithvalidationsComponent } from './form-withvalidations.component';

describe('FormWithvalidationsComponent', () => {
  let component: FormWithvalidationsComponent;
  let fixture: ComponentFixture<FormWithvalidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithvalidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithvalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
