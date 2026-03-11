import { Component, signal } from '@angular/core';
import { WishItem}  from '../shared/models/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishList } from './wish-list/wish-list';
import { AddWishForm } from './add-wish-form/add-wish-form';
import { WishFilter } from './wish-filter/wish-filter';
import events from './../shared/services/EventService'
import { WishSevice } from './service/wish';




@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule,WishList,AddWishForm,WishFilter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wishlist');
  items: WishItem[] = [];
  
  constructor(private wishService:WishSevice){
    events.listen('removeWish',(wish:any)=>{
      let index=this.items.indexOf(wish);
      this.items.splice(index,1);
      this.wishService.saveWishes(this.items);
    })
  }

  addWish(wish: WishItem): void {
    this.items.push(wish);
    this.wishService.saveWishes(this.items);
  }

  ngOnInit():void{
    this.wishService.getWishes().subscribe((data:any)=>{
      this.items=data.map((item:any)=>new WishItem(item.wishText, item.isComplete));
    },
    (error:any)=>{
      console.error('Error loading wishes:', error);
    })
  }

  filter:any=(item:WishItem)=>item;

  get visibleItems():WishItem[]{
    return this.items.filter(this.filter);
  }

  ngOnDestroy():void{
    this.wishService.saveWishes(this.items);
  }
}
