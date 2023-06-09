import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weeks = [];
  connectedTo = [];

  constructor() {
    this.weeks = [
      {
        id: 'week-1',
        weeklist: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
      },
      {
        id: 'week-2',
        weeklist: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
      },
      {
        id: 'week-3',
        weeklist: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
      },
      {
        id: 'week-4',
        weeklist: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
      },
    ];
    for (let week of this.weeks) {
      this.connectedTo.push(week.id);
      console.log('WEEK ', week);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('EVENT', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('EVENT', event);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
