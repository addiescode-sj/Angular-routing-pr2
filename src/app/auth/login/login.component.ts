import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isPending = false;

  constructor(public authService: AuthService, public router: Router) { }

  getMessgae() {
    return this.isPending
      ? 'Trying to log in ...'
      : `Logged ${this.isLoggedIn ? 'in' : 'out'}`;
  }

  ngOnInit() {
    this.authService
      .getIsLoggedIn()
      .subscribe((isLoggedIn = false) => (this.isLoggedIn = isLoggedIn));
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    try {
      if (!this.isLoggedIn) {
        this.isPending = true;
        // pending 상태 체크를 위해 이벤트 루프 지연
        setTimeout(() => {
          const redirect = this.authService.login();

          let navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          this.router.navigate([redirect], navigationExtras);
          this.isPending = false;
        }, 1000);
      } else {
        this.authService.logout();
      }
    } catch {
      this.router.navigate(['500']);
    }
  }
}
