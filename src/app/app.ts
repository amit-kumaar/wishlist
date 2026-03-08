import { Component, signal } from '@angular/core';
import { WishItem}  from '../shared/models/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishList } from './wish-list/wish-list';
import { AddWishForm } from './add-wish-form/add-wish-form';
import { WishFilter } from './wish-filter/wish-filter';



@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule,WishList,AddWishForm,WishFilter],
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
  
  filter:any;
}
