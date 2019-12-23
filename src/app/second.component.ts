import { Component , OnInit } from "@angular/core";
import { SharedService } from './shared.service';

@Component({
  selector : "app-hi",
  template : `
<div class="valueparent">
<p>{{number}}</p>
</div>`,
styles : [`p:first-of-type {
  font-family: Lato;
}

.valueparent{
  display: flex;
    background: tomato;
    height: 100px;
    width: 100px;
    color:#fff;
    align-items: center;
    justify-content: center;
}
`]
})

export class SecondComponent implements OnInit {
  number;

  constructor(private SharedService : SharedService){}

  ngOnInit(){
this.SharedService.numValue.subscribe(val => {
    this.number = val;
    })
  }
}