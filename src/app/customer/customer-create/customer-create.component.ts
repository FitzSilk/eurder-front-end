import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../imports/customer';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Input() customers: Customer[];
  checkoutForm;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: this.formBuilder.group({
        street: '',
        streetNumber: '',
        postalCode: '',
        city: ''
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.customerService.addNew(customerData).subscribe(customer => {
      this.customers.push((customer));
    });
    this.customers = this.customerService.clearCustomer();
    this.checkoutForm.reset();
    console.warn('Your registering has been submitted', customerData);
  }

}
