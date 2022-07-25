import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { id: Math.random(), description: 'eat', done: true },
    { id: Math.random(), description: 'sleep', done: false },
    { id: Math.random(), description: 'play', done: false },
    { id: Math.random(), description: 'laugh', done: false },
  ]

  get items() {

    if(this.filter === 'all'){
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string){
    if(description == ''){
      
    } else {
      this.allItems.unshift({
        id: Math.random(),
        description,
        done: false
      });
    }
  }

  remove(item: { id: number, description: string; done: boolean; }) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
}
