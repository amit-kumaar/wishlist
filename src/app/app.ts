import { Component, signal } from '@angular/core';
import { WishItem}  from '../shared/models/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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
  listFilter:string='0';
  newWishText='';




  addNewWish(){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText='';
  }

  filterChanged(value:any){
    console.log(value)
  }
  toggleItem(item:WishItem){
    item.isComplete=!item.isComplete;
    console.log(item)
  }
}
