import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greetings',
  imports: [],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.scss',
  standalone: true,
})
export class GreetingsComponent implements OnInit {
  name: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')!;
  }
}
