import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

import {Article} from './article';
import { API_URLs} from '../config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [
    new Article(1, '1Hello world', '1descriptiondescriptiondescriptiondescriptiondescriptiondescription', 'Mohamed Marzouki', 'https://www.fixpocket.com/public_assets/uploads/beats/1525674588536234-1QbGIX1496037475.jpg'),
    new Article(2, '2Hello world', '2descriptiondescriptiondescriptiondescriptiondescriptiondescription', 'Mohamed Marzouki', 'https://www.fixpocket.com/public_assets/uploads/beats/1525674588536234-1QbGIX1496037475.jpg'),
    new Article(3, '3Hello world', '3descriptiondescriptiondescriptiondescriptiondescriptiondescription', 'Mohamed Marzouki', 'https://www.fixpocket.com/public_assets/uploads/beats/1525674588536234-1QbGIX1496037475.jpg'),
    new Article(4, '4Hello world', '4descriptiondescriptiondescriptiondescriptiondescriptiondescription', 'Mohamed Marzouki', 'https://www.fixpocket.com/public_assets/uploads/beats/1525674588536234-1QbGIX1496037475.jpg'),
  ];
  constructor(private httpClient: HttpClient) { }

  // public getArticles(): Article[] {
  //   return this.articles;
  // }

  getArticles(): Observable<any> {
    return this.httpClient.get(API_URLs.ARTICLE_URL);
  }

  addArticle(article: Article): Observable<any> {
    return this.httpClient.post(API_URLs.ARTICLE_URL, article);
  }

  updateArticle(oldArticle: Article, article: Article): Observable<any> {
    return this.httpClient.put(API_URLs.ARTICLE_URL, [oldArticle, article]);
  }

  deleteArticle(id: number): Observable<any> {
    return this.httpClient.delete(API_URLs.ARTICLE_URL + '/' + id);
  }
}
