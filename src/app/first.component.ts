import { Component, Input,OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-first',
  template: `
  <div class="valueparent">
<p>{{number}}</p>
</div>
  `,
  styles: [`
.valueparent{
  display: flex;
    background: tomato;
    height: 100px;
    width: 100px;
    color:#fff;
align-items: center;
    justify-content: center;
}`]
})
export class FirstComponent implements OnInit  {

number ;
  constructor(private SharedService : SharedService){}
  
  ngOnInit(){
  this.SharedService.numValue.subscribe(val => {
    this.number = val;
  })
  }

  
}
