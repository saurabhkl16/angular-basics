import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent {
  public UserName = signal('');
  public Password = signal('');

  constructor(private router: Router, private authGuard: AuthGuard) {}

  public getDetails(form: any) {
    if (form.valid) {
      this.authGuard.toggleLogin();
      this.router.navigate(['/about']);
    } else {
      alert('please enter all details');
    }
  }
}
