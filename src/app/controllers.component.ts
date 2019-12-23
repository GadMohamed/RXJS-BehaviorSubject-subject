import { Component , OnInit } from "@angular/core";
import { SharedService } from './shared.service';


@Component({
  selector : "app-controllers",
  template : `<div class="contrllers">
  <button (click)="increse()">increase</button>
  <button (click)="decrease()">decrease</button>
</div>`,
styles : [`
.contrllers{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.contrllers button:first-of-type{
  background: #60a3bc;
}

.contrllers button{
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #ed3330;
padding: 10px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
cursor: pointer;
}


`]
})

export class ControllersComponent implements OnInit {

  number;

  constructor(private SharedService : SharedService){};

  ngOnInit(){
    this.SharedService.numValue.subscribe(val => {
    this.number = val;
  })
  };

  increse(){
    this.SharedService.change(++this.number)
  }

  decrease(){
this.SharedService.change(--this.number)
  }
}