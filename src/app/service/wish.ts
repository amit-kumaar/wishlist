import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../../shared/models/wishItems';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WishList } from '../wish-list/wish-list';

@Injectable({
  providedIn: 'root',
})
export class WishSevice {
  private STORAGE_KEY = 'wishes';
  
  constructor(private http:HttpClient){}

  private getStandardOptions(): any{
    return{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    };
  }

  getWishes(): Observable<WishItem[]>{
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if(stored){
      return of(JSON.parse(stored));
    }
    return this.http.get<WishItem[]>('wishes.json').pipe(
      tap(wishes => this.saveWishes(wishes))
    );
  }

  saveWishes(wishes: WishItem[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(wishes));
  }
  
  private addWish(wish:WishItem){
    let options=this.getStandardOptions();
    options.headers=options.headers.set('Authorization','Bearer my-token')
    this.http.post('assets/wishes.json',wish,options);
  }
  
}
