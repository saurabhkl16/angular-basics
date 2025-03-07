import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  // imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent {
  public topics = [
    {
      image_url: 'route.png',
      heading: 'Routing',
      button_name: 'Lets Go',
      path: '/learn-routing',
    },
  ];
}
