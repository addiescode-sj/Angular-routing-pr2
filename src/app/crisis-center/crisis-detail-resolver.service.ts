import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { CrisisService } from './crisis/crisis.service';
import { Crisis } from './crisis/crisis';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private cs: CrisisService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Crisis> | Observable<never> {
    // let은 값이 '변경될' 변수라고 생각하는데 따로 값을 변환 해주는 경우가 없네요.. const로 바꿨습니다!
    const id = Number(route.paramMap.get('id'));

    return this.cs.getCrisis(id).pipe(
      take(1),
      mergeMap((crisis) => {
        if (crisis) {
          return of(crisis);
        } else {
          // id에 해당하는 데이터를 찾지 못한 경우
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
