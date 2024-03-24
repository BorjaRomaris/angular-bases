import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character,interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

@Output()
public onNewCharacter:EventEmitter<Character>=new EventEmitter();

  public Personaje: Character ={
    name:'',
    power:0

  };

  emitCharacter():void{
console.log(this.Personaje);
if(this.Personaje.name.length===0)return;
this.onNewCharacter.emit(this.Personaje);
this.Personaje={name:'',power:0};
  }
}
