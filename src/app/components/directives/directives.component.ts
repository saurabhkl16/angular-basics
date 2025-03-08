import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
  standalone: true,
})
export class DirectivesComponent {
  public isDarkMode: boolean = false;
  public isAdmin = signal(false);
  public isLogin = signal(false);
  public adminButton = computed(() =>
    this.isAdmin() === false ? 'Admin' : 'Logout Admin'
  );
  public loginButton = computed(() =>
    this.isLogin() === false ? 'Login' : 'Logout'
  );
  public user = [
    { id: 1, name: 'Saurabh', surname: 'L' },
    { id: 2, name: 'Krishna', surname: 'P' },
    { id: 2, name: 'Vikas', surname: 'D' },
    { id: 3, name: 'Akash', surname: 'G' },
    { id: 4, name: 'Rahul', surname: 'R' },
  ];
  public signalValue: string = 'red';

  constructor() {}

  public handleLoginButton() {
    this.isLogin.set(!this.isLogin());
  }

  public handleAdminButton() {
    this.isAdmin.set(!this.isAdmin());
  }

  public handleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  public handleTraficSignal(value: string) {
    if (value === 'red') {
      this.signalValue = 'red';
    } else if (value === 'orange') {
      this.signalValue = 'orange';
    } else if (value === 'green') {
      this.signalValue = 'green';
    }
  }
}
