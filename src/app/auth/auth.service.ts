import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false); //값이 변경될때마다 emit
  public readonly isLoggedIn = this._isLoggedIn.asObservable(); //해당 emit된 값을 Observable 타입으로 변환

  // 사용자가 로그인한 후에 이동할 URL을 저장합니다.
  redirectUrl: string;

  login(): void {
    this._isLoggedIn.next(true);
    //this.redirectUrl = redirect;
    // auth & premission check ...
  }

  logout(): void {
    this._isLoggedIn.next(false);
    // logout logic ...
    // if (error) new Error('error!')
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn;
    // return of(this.isLoggedIn);
  }
}
