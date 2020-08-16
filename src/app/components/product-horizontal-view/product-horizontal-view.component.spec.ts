import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHorizontalViewComponent } from './product-horizontal-view.component';

describe('ProductHorizontalViewComponent', () => {
  let component: ProductHorizontalViewComponent;
  let fixture: ComponentFixture<ProductHorizontalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHorizontalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHorizontalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
