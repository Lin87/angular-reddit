import { Injectable } from '@angular/core';
import { Article } from './article/article.model';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class FlagArticleService {

  constructor() { }

  flag(article: Article):void {
    article.flagged = true;
  }

}
