
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character,interface';
import { Dbzservice } from '../services/dbz.services';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
constructor(private dbzservice:Dbzservice){}

get characters():Character[]{
  return[... this.dbzservice.characters];
}
onDeleteCharacter(id:string):void{
  this.dbzservice.deleteCharacterById(id);
}

addCharacter(character:Character):void{
  this.dbzservice.onNewCharacter(character);
}

}

