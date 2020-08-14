import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // 사용자가 로그인한 후에 이동할 URL을 저장합니다.
  redirectUrl: string;

  login(redirect = '/admin'): string {
    this.isLoggedIn = true;
    // auth & premission check ...
    return redirect;
  }

  logout(): void {
    this.isLoggedIn = false;
    // logout logic ...
    // if (error) new Error('error!')
  }

  getIsLoggedIn(): Observable<boolean> {
    return of(this.isLoggedIn);
  }
}
