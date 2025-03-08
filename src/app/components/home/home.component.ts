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
    {
      image_url: 'api.png',
      heading: ' HTTP Client & APIs',
      button_name: 'Lets Go',
      path: '/handle-api',
    },
    {
      image_url: 'document.png',
      heading: 'Parent -> child -> parent',
      button_name: 'Lets Go',
      path: '/parent-comp',
    },
    {
      image_url: 'direction.png',
      heading: 'Directives',
      button_name: 'Lets Go',
      path: '/directives',
    },
    {
      image_url: 'data-binding.png',
      heading: 'Data Binding',
      button_name: 'Lets Go',
      path: '/data-binding',
    },
  ];
}
