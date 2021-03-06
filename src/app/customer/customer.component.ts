import {Component, OnInit} from '@angular/core';
import {Customer} from './imports/customer';
import {CustomerService} from '../services/customer.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }
}
