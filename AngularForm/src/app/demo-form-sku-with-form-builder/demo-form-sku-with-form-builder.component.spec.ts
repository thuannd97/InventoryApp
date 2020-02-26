import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuWithFormBuilderComponent } from './demo-form-sku-with-form-builder.component';

describe('DemoFormSkuWithFormBuilderComponent', () => {
  let component: DemoFormSkuWithFormBuilderComponent;
  let fixture: ComponentFixture<DemoFormSkuWithFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuWithFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuWithFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
