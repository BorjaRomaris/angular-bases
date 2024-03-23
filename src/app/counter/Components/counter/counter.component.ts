import { Component } from "@angular/core";

@Component({
selector:'app-counter',
template:`
<h3>Counter:{{counter}}</h3>
<button (click)="increasyBy(1)">+1</button>

<button (click)="decreaseBy(1)">-1</button>


<button (click)="reset()">Reset</button>`


})
export class CounterComponent{

  public counter=10

  increasyBy(value:number):void{
this.counter+=1;

  }

  decreaseBy(value:number):void{
   this.counter-=1;

      }

      reset():void{
       this.counter=10;

          }


}
