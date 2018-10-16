import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //data: Article[];

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  doDelete(id: number) {
    return this.http.delete('http://localhost:3000/articles/'+id);
  }

}
