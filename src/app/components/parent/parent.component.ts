import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  standalone: true,
})
export class ParentComponent {
  public receviedEmail: string = '';
  public username: string = '';

  public setUserName(value: string) {
    this.username = value;
  }

  public receiveEmail(email: string) {
    console.log(email);
    this.receviedEmail = email;
  }
}
