import {Component, Input} from '@angular/core';
import {TechDto} from "../../../services/technologies/technology.interface";

@Component({
  selector: 'offer-tech-item',
  templateUrl: './tech-item.component.html',
  styleUrl: './tech-item.component.scss'
})
export class TechItemComponent {
  @Input('tech-item') techItem!: TechDto;
  @Input('question-count') count!: number;
}
