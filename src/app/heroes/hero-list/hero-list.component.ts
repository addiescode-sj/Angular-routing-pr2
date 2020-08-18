import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedId: number;
  displayedColumns: string[] = ['id', 'name', 'button'];

  //heroes: Hero[];

  constructor(private service: HeroService, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.getHeroes();
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        //+는 string형으로 받은 id를 number로 변환시켜준다.
        this.selectedId = Number(params.get('id'));
        return this.service.getHeroes();
      })
    );
  }
}
