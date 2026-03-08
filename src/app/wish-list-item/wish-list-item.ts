import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import events from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  imports: [CommonModule],
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {

  @Input() wishText!:string;
  @Input() fulfilled!:boolean;
  @Output() fulfilledChange=new EventEmitter<boolean>();

  get cssClasses(){
      // return this.fulfilled ? ['strikeout','text-muted']:[];
      return{
        'strikeout text-muted':this.fulfilled
      };
  }

  removeWish(){
    events.emit('removeWish',this.wishText)
  }

  toggleFulfilled(){
    this.fulfilled=!this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

}
