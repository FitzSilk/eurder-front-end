import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerDetailComponent} from './customer-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CustomerService} from '../customer/customer.service';

describe('CustomerDetailComponent', () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [CustomerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
