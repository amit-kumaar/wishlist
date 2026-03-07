import { Component, signal } from '@angular/core';
import { WishItem}  from '../shared/models/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const filters=[
  (item:WishItem)=>item,
  (item:WishItem)=>!item.isComplete,
  (item:WishItem)=>item.isComplete
];


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
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
  listFilter:any='0';
  newWishText='';

  get visibleItems():WishItem[]{
    return this.items.filter(filters[this.listFilter])
  };

  addNewWish(){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText='';
  }

  toggleItem(item:WishItem){
    item.isComplete=!item.isComplete;
    console.log(item)
  }
}
