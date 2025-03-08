import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true,
})
export class ChildComponent {
  @Input() UserName: string = '';
  @Output() UserEmail = new EventEmitter();

  sendEmailToParent(value: string) {
    this.UserEmail.emit(value);
  }
}
