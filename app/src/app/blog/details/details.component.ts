import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  articleId!: number;
  
  get currentArticle() {
    return this.blogService.searchedArticle;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
   ) { }

  ngOnInit(): void {
    this.articleId = Number(this.activatedRoute.snapshot.paramMap.get('id'));    
    this.blogService.getArticle(this.articleId);
  }

}
