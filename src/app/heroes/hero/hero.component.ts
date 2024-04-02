import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string= "Ironman";
  public age: number=45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{

    return this.name+" - "+this.age;
  }
  cambiarNombre(value: string){
    this.name=value;

  }
  cambiarEdad(value: number){
    this.age=value;
  }

  resetForm():void{
    this.name="Ironman";
    this.age=45;
  }
}
