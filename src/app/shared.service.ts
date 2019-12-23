import { Injectable } from '@angular/core';
import { of , BehaviorSubject } from "rxjs";


@Injectable({
  providedIn : 'root'
})

export class SharedService {
  constructor(){};
   number = new BehaviorSubject(1);
  numValue = this.number.asObservable();

  change(next){
    this.number.next(next)
    console.log(this.number.value)
  }
}