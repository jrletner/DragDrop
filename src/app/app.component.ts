import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items = ['Coach Zack', 'Heath', 'Chris', 'Trevor', 'Sara', 'Joe'];
  title = 'DragDrop';
  ngOnInit(): void {}

  //* FUNCTIONS
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
