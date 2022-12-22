import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from '../shared/interfaces/article';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articles: IArticle[] | null = [];
  article!: IArticle | null;

  get blogArticles() {
      return this.articles;
  }

  get searchedArticle() {
    return this.article
  }

  constructor(
    private http: HttpClient
  ) { 
    this.getArticles().subscribe(console.log);
  }

  setProducts(articles: any) {
    for (const key in articles) {
      if (!!Number(key)) {
         this.articles?.push(articles[key]);
      }
    }
  }

  setSerchedArticle(article: IArticle) {
    this.article = article
  }

  getArticles() {
    return this.http.get<any>(
      'https://ecommerce-store-9b470-default-rtdb.firebaseio.com/articles.json'
    ).pipe(tap(res => this.setProducts(res)))
  }

  getArticle(id: number) {
    return this.http.get<any>(
      `https://ecommerce-store-9b470-default-rtdb.firebaseio.com/articles/${id}.json`
    ).subscribe(res => this.setSerchedArticle(res));
  }
}
