import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../imports/customer';
import {Address} from '../imports/address';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Input() customers: Customer[];

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
  ) {
  }

  ngOnInit(): void {
  }

  addNew(firstName: string, lastName: string,
         email: string, password: string,
         phoneNumber: string, street: string,
         streetNumber: string, postalCode: string, city: string): void {
    this.customerService.addNew({firstName, lastName, email, password, phoneNumber} as Customer,
      {street, streetNumber, postalCode, city} as Address)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }

}
