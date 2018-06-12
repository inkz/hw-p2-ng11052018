import { Component, OnInit, ViewChild, ElementRef, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import { GithubSearchService } from '../common/services/github-search.service';
import { IRepository } from '../common/interfaces/irepository';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('input') input: ElementRef;

  @Output()
  public results: EventEmitter<IRepository[]> = new EventEmitter();

  private _onKeyUp: Subscription;

  constructor(private githubSearch: GithubSearchService) { }

  private _search(query) {
    this.githubSearch.search(query)
      .subscribe((repos: IRepository[]) => {
        this.results.emit(repos);
      });
  }

  ngOnInit() {
    this._onKeyUp = Observable.fromEvent(this.input.nativeElement, 'keyup')
      .debounceTime(1000)
      .subscribe((e: KeyboardEvent) => {
        this._search((e.target as HTMLInputElement).value);
      });
  }

  ngOnDestroy(): void {
    this._onKeyUp.unsubscribe();
  }

}
