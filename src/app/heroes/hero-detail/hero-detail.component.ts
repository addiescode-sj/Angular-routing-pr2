import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  // min: 검색해보니 따로 app-hero-detail을 상위 컴포넌트에서 렌더하는게 아니던데, Input으로 해놓은 이유가 따로 있을까요?
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit() {
    // min: path param이 추가로 바뀌지 않는거같아 ActivatedRoute snapshot으로 받아서 썼어요.
    this.hero$ = this.service.getHero(
      Number(this.route.snapshot.paramMap.get('id'))
    );
  }

  // min: 아래 함수 호출 부분이 없던데 따로 추가되는 기능인가요?
  // gotoHeroes(hero: Hero) {
  //   this.router.navigate([
  //     '/superheroes',
  //     {
  //       ...(hero && { id: hero.id }),
  //     },
  //   ]);
  // }
}
