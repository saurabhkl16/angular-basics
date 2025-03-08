import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: `
    <div *ngIf="this.loaderService.loading()" class="spinner">
      <mat-spinner color="dark"></mat-spinner>
    </div>
  `,
  styleUrls: ['spinner.component.scss'],
})
export class SpinnerComponent {
  constructor(public loaderService: HomeService) {}

  ngOnInit() {
    console.log(this.loaderService.loading());
  }
}
