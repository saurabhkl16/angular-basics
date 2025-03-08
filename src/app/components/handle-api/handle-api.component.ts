import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../home.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from '../app-spinner/app-spinner.component';

@Component({
  selector: 'app-handle-api',
  imports: [
    FormsModule,
    CommonModule,
    MatProgressSpinnerModule,
    SpinnerComponent,
  ],
  templateUrl: './handle-api.component.html',
  styleUrl: './handle-api.component.scss',
  standalone: true,
})
export class HandleApiComponent {
  public selectedApi: any;
  public responseData: any;
  public responseKeys: any;
  public apiOptions = [
    {
      value: 'https://jsonplaceholder.typicode.com/comments',
      label: 'Get Comments',
    },
    { value: 'https://jsonplaceholder.typicode.com/posts', label: 'Get Posts' },
    { value: 'https://jsonplaceholder.typicode.com/todos', label: 'Get Todos' },
  ];

  constructor(private service: HomeService) {}

  ngOnInit() {}

  public getResponse() {
    if (this.selectedApi != undefined) {
      this.service.show();
      setTimeout(()=>{
        this.service.callApi(this.selectedApi).subscribe((res: any) => {
          this.responseData = res;
          this.responseKeys = Object.keys(this.responseData[0]);
          this.service.hide();
        });
      },1000)
    } else {
      alert('Please select any option');
    }
  }
}
