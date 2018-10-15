import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World'
  sitelogo = '/assets/images/logo.png';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享'

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.sitename = 'The Will Will Web'
  }

}
