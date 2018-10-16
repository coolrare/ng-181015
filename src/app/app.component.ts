import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  keyword = '0';

  constructor(public datasvc: DataService) {
  }

  public get page(): number {
    return parseInt(this.keyword);
  }

  doSearch(value) {
    this.keyword = value;
    console.log('Your search: ' + value);
  }

  doDelete(id: number) {
    this.datasvc.doDelete(id);
  }
}
