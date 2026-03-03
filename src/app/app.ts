import { Component, signal } from '@angular/core';
import { WishItem}  from '../shared/models/wishItems';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wishlist');
  items:WishItem[]=[
    new WishItem('To learn angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself')
  ];
  toggleItem(item:WishItem){
    item.isComplete=!item.isComplete;
    console.log(item)
  }
}
