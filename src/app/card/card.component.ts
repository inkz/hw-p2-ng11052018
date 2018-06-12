import { Component, Input } from '@angular/core';
import { IRepository } from '../common/interfaces/irepository';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public card: IRepository;

}
