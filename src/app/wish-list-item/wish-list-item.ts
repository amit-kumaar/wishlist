import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'wish-list-item',
  imports: [],
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {

  @Input() wishText!:string;
  @Input() fulfilled!:boolean;
  @Output() fulfilledChange=new EventEmitter<boolean>();

  toggleFullfilled(){
    this.fulfilled=!this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

}
