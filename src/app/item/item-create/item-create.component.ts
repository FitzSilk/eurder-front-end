import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ItemService} from '../../services/item.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private route: ActivatedRoute,
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
  }

  onSubmit(itemData) {
    // Process checkout data here
    this.itemService.addNew(itemData).subscribe(item => {
      this.items.push(item);
    });
    this.items = this.itemService.clearItem();
    this.checkoutForm.reset();

    console.warn('Your item has been submitted', itemData);
  }

  countChar(val): number {
    return 255 - val.value.length;
  }

}
