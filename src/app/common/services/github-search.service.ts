import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IRepository } from '../interfaces/irepository';

@Injectable()
export class GithubSearchService {

  constructor(private _http: HttpClient) { }

  public search(query: String): Observable<IRepository[]> {
    return this._http.get<IRepository[]>(`https://api.github.com/repositories?q=${query}`);
  }

}
