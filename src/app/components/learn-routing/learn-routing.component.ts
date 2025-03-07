import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-learn-routing',
  imports: [RouterModule, FormsModule],
  templateUrl: './learn-routing.component.html',
  styleUrl: './learn-routing.component.scss',
  standalone: true,
})
export class LearnRoutingComponent {
  public userName = signal<string>('');

  constructor(private route: Router) {}

  getGreetings() {
    console.log(this.userName());
    if (this.userName().trim()) {
      this.route.navigate(['learn-routing', this.userName()]);
    } else {
      alert('please enter your name...');
    }
  }
}
