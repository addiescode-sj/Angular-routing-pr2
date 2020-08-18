import { Injectable } from '@angular/core';

import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  public readonly isLoggedIn = this._isLoggedIn.asObservable();

  // 사용자가 로그인한 후에 이동할 URL을 저장합니다.
  redirectUrl: string;

  login(redirect = '/admin'): string {
    this._isLoggedIn.next(true);
    // auth & premission check ...
    return redirect;
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
