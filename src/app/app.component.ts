import { Component } from '@angular/core';
import { IRepository } from './common/interfaces/irepository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public repositories: IRepository[];

  public onResults(results: IRepository[]) {
    this.repositories = results;
  }

}
