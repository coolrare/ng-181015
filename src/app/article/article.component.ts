import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() item: Article;

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doDelete() {
    this.delete.emit(this.item.id);
  }

}
