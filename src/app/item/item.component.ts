import {Component, OnInit} from '@angular/core';
import {Item} from './item';
import {ItemService} from '../services/item.service';
import {MessageService} from '../services/message.service';
import {MatGridList, MatGridTile, MatGridListModule} from '@angular/material/grid-list';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  stockAmount(amount: number): string {
    switch (amount) {
      case (4): {
        return 'LOW';
      }
      case (9): {
        return 'MEDIUM';
      }
      default:
        return 'HIGH';
    }

  }
}
