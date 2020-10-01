import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailListComponent } from './payment-detail-list.component';

describe('PaymentDetailListComponent', () => {
  let component: PaymentDetailListComponent;
  let fixture: ComponentFixture<PaymentDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
