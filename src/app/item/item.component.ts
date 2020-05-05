import {Component, OnInit} from '@angular/core';
import {Item} from './item';
import {ItemService} from '../services/item.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];

  breakpoint;

  constructor(private itemService: ItemService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getItems();
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 1;
    this.breakpoint = (window.innerWidth > 400) ? 2 : 1;
    this.breakpoint = (window.innerWidth > 800) ? 3 : 1;

  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 1;
    this.breakpoint = (event.target.innerWidth > 400) ? 2 : 1;
    this.breakpoint = (event.target.innerWidth > 800) ? 3 : 1;
  }
}
