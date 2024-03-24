import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character,interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {


  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10,

  }]
  // onDelete= index value:number
@Output()
 public onDelete:EventEmitter<string>= new  EventEmitter();


  onDeleteCharacter(index?: string): void {
    if(!index){
      return;
    }
 
    this.onDelete.emit(index);
  }
}
