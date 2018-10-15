import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  keyword = '123';

  doSearch(value) {
    this.keyword = value;
    console.log('Your search: ' + value);
  }
}
