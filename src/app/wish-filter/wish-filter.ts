import { CommonModule } from '@angular/common';
import { Component,Output,Input,EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItems';
import { FormsModule } from '@angular/forms';


const filters=[
  (item:WishItem)=>item,
  (item:WishItem)=>!item.isComplete,
  (item:WishItem)=>item.isComplete
];

@Component({
  selector: 'wish-filter',
  imports: [CommonModule,FormsModule],
  templateUrl: './wish-filter.html',
  styleUrl: './wish-filter.css',
})
export class WishFilter {
  @Input() filter: any;
  @Output() filterChange=new EventEmitter<any>();
 
  ngOnInit():void{
    this.updateFilter('0');
  }

  listFilter:any='0';

  updateFilter(value:any){
    this.filter=filters[value]
    this.filterChange.emit(this.filter);
  }
}
