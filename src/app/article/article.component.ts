import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ArticleService } from './article.service';
import {Article} from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: Article[];
  articleForm: FormGroup;
  operation: string = 'add';
  selectedArticle: Article;
  oldArticle: Article;

  constructor(private articleService: ArticleService, private fb: FormBuilder) {
    this.createArticleForm();
  }

  ngOnInit() {
    this.initArticle();
    this.loadArticles();
  }

  createArticleForm() {
    this.articleForm = this.fb.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required],
      auteur: '',
      urlImage: '',
    });
  }

  loadArticles() {
    this.articleService.getArticles().subscribe(
      data => { this.articles = data; console.log(data); },
      error => { console.log('An error was occured!.'); },
      () => { console.log('Artiles Loaded successfully.'); }
    );
  }

  addArticle() {
    const article = this.articleForm.value;
    console.log(article);
    this.articleService.addArticle(article).subscribe(
      res => { this.loadArticles(); this.initArticle(); }
    );
  }

  updateArticle() {
    console.log(this.selectedArticle);
    this.articleService.updateArticle(this.oldArticle, this.selectedArticle).subscribe(
      res => { this.loadArticles(); this.initArticle(); }
    );
  }

  deleteArticle() {
    let id = this.selectedArticle.id;
    console.log(id)
    this.articleService.deleteArticle(id).subscribe(
      res => { this.loadArticles(); this.initArticle(); }
    );
  }
  initArticle() {
    this.selectedArticle = new Article();
    this.createArticleForm();
  }
}
