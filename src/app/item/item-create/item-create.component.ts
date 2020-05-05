import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../../services/item.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  @Input() items: Item[];

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) {
  }

  ngOnInit() {
  }

  addNew(name: string, description: string, price: number, amount: number, visualLink: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.itemService.addNew({name, description, price, amount, visualLink} as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

}
