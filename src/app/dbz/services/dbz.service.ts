import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  //Si nosotros no tabajos con privdeIn tenemos que definir el servicio en la parte de los providers
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 1000
  }, {
    id: uuid(),
    name: "Goku",
    power: 9500
  }, {
    id: uuid(),
    name: "Vegeta",
    power: 10000
  }];

  addCharacter(character: Character): void {

    const newCharacter: Character = {

      id: uuid(),
      ...character//esto es el resto de propiedades
    }


    this.characters.push(newCharacter);


  }

  // onDeleteCharacter(index: number) {

  //   this.characters.splice(index, 1);
  // }

  eliminarPersonajePorId(id?: string) {

    if (!id) return;
    this.characters = this.characters.filter(character => character.id !== id);

  }

}
