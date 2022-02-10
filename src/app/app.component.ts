import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all'; //union型態屬性，typescript專有，表示值有這三種可能，預設是'all',當賦值錯誤，就會提早通知

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    //getter 'items'
    if (this.filter === 'all') {
      //如果filter選項是'all'時，直接回傳整個list
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    ); //一個一個篩選allItems內的元素，如果filter選項是done，就回傳'done'屬性是true的項目
  }

  addItem(description: any) {
    //代表description可以是任何型態
    this.allItems.unshift({
      //添加項目至陣列頂端
      description,
      done: false,
    });
  }

  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
