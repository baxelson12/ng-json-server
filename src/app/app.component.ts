import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private as: AppService) {
    this.as
      .post({
        id: 2,
        name: 'Brad',
        info: 'Hello, world!'
      })
      .subscribe(console.log);
  }
}
