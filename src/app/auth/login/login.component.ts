import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isPending = false;

  constructor(public authService: AuthService, public router: Router) {}

  getMessgae() {
    return this.isPending
      ? 'Trying to log in ...'
      : `Logged ${this.isLoggedIn ? 'in' : 'out'}`;
  }

  ngOnInit() {
    this.authService.getIsLoggedIn().subscribe((isLoggedIn = false) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    if (this.isLoggedIn) {
      this.router.navigate([this.authService.login()]);
    } else {
      try {
        this.authService.logout();
        this.isLoggedIn = false;
      } catch {
        this.router.navigate(['404']);
      }
    }
  }
}
