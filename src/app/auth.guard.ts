import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private isLoggedin = false;

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isLoggedin) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  public toggleLogin() {
    this.isLoggedin = !this.isLoggedin;
  }
}
