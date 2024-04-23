import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginActive: boolean = false;
  isRegisterActive: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveTabs();
      }
    });
  }

  updateActiveTabs() {
    this.isLoginActive = this.router.url.includes('/login');
    this.isRegisterActive = this.router.url.includes('/register');
  }
}
