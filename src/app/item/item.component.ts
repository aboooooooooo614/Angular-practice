import { Component, Input, Output, EventEmitter } from '@angular/core'; //EventEmitter使ItemComponent與AppComponent可以共通
import { Item } from '../item'; //這樣就知道html內的item是什麼了

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: any) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
