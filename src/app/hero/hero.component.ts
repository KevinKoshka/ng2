import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  //El parámetro del constructor simultáneamente define una variable privada heroService
  //y lo identifica como el sitio de inyección del HeroService. Cuando Angular crea el componente,
  //el sistema de inyección de dependencia setea el parámetro heroService a la instancia singleton
  // de HeroService.
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
}
