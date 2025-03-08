import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
  standalone: true,
})
export class DataBindingComponent {
  public userName: string = 'Saurabh';
  public notification: number = 5;
  public btnType = 'submit';
  public inputVal = 'attribute value';
  public isDisabled = false;
  public disabledButton = this.isDisabled === false ? 'click me' : 'disabled';
  public eventBindingButtonVal = '';
  public eventBindingInputVal = '';

  public toggleDisabledButton() {
    this.isDisabled = !this.isDisabled;
  }

  public handleClickButton() {
    alert('Clicked...');
  }

  public eventBindingButton() {
    this.eventBindingButtonVal = 'Button Clicked';
  }

  public onInputChange(event: any) {
    this.eventBindingInputVal = event.target.value;
  }
}
