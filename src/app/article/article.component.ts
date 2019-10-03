import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';
import { FlagArticleService } from '../flag-article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = "row";

  @Input() article: Article;

  constructor(private _flagArticleService: FlagArticleService) {
    _flagArticleService  = new FlagArticleService();
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  flagArticle():void {
    this._flagArticleService.flag(this.article);
    this.cssClass += " flagged";
  }

}
