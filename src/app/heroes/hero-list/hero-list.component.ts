import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedId: number;
  displayedColumns = ['id', 'name', 'button'];

  //heroes: Hero[];

  constructor(private service: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroes$ = this.service.getHeroes();
  }
}
