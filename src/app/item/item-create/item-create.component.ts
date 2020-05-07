import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ItemService} from '../../services/item.service';
import {Location} from '@angular/common';
import {Item} from '../item';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  items;
  checkoutForm;
  control;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      amount: '',
      visualLink: ''
    });
  }

  ngOnInit() {
    this.items = this.itemService.getItems();
    this.control = 255;
  }

  onSubmit(itemData) {
    // Process checkout data here
    this.itemService.addNew(itemData).subscribe(item => {
      this.router.navigate(['detail/' + item.id]);
    });
    this.items = this.itemService.clearItem();
    this.checkoutForm.reset();
    console.warn('Your item has been submitted', itemData);
  }

}
