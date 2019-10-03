import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];

  constructor() {
    this.articles= [
      new Article("Angular", "http://angular.io", "user", 3),
      new Article("Fullstack", "http://fullstack.io", "user", 2),
      new Article("Google", "https://www.google.com", "administrator", 5),
      new Article("Angular Homepage", "http://angular.io", "administrator", 1),
      new Article("Ethan Lin's GitHub Profile", "https://github.com/Lin87", "user", 10)
    ];
  }
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, "user", 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {

    let flaggedArticles = this.articles.filter(a => a.flagged == true);
    let unflaggedArticles = this.articles.filter(a => a.flagged != true).sort((a: Article, b: Article) => b.votes - a.votes);
    
    return [...unflaggedArticles, ...flaggedArticles];

  }

}
