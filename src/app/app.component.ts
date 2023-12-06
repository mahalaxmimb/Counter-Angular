import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';

  count: number = 0;

  handleIncre = () => {
    this.count = this.count + 1;
  }
  

  handleDecre = () => {
    this.count = this.count - 1;
  }

  handleReset = () => {
    this.count = 0;
  }
}
