import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Article[];

  constructor(private http: HttpClient) { }

  load() {
    this.http.get('http://localhost:3000/articles')
      .subscribe((values: Article[]) => {
        this.data = values;
      });
  }

  doDelete(id: number) {
    this.data = this.data.filter((item) => {
      return item.id != id;
    });
  }

}
