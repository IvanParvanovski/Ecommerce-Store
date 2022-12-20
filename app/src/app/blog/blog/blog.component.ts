import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/shared/interfaces/article';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  articles: IArticle[] | null = []

  get blogArticles() {
    
    return this.articles;
  }

  constructor(
    private blogService: BlogService,
    private router: Router
  ) { 
    this.articles = blogService.blogArticles;
  }

  handleDetails(id: number) {
    this.router.navigate(['blog/', id]);
  }
}
