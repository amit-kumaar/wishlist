import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import events from '../../shared/services/EventService';
import { WishItem } from '../../shared/models/wishItems';

@Component({
  selector: 'wish-list-item',
  imports: [CommonModule],
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {

  @Input() wish!:WishItem;

  get cssClasses(){
      // return this.fulfilled ? ['strikeout','text-muted']:[];
      return{
        'strikeout text-muted':this.wish.isComplete
      };
  }

  removeWish(){
    events.emit('removeWish',this.wish)
  }

  toggleFulfilled(){
    this.wish.isComplete=!this.wish.isComplete;
  }

}
