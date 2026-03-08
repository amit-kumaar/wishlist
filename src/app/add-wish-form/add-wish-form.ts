import { Component,Output,EventEmitter,Input} from '@angular/core';
import { WishItem } from '../../shared/models/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.html',
  styleUrl: './add-wish-form.css',
})
export class AddWishForm {
  newWishText = '';
  @Output() addWish=new EventEmitter<WishItem>();

  addNewWish(){
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText='';
  }
}
