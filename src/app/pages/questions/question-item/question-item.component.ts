import {Component, Input} from '@angular/core';
import {QuestionDto} from "../../../services/questions/questions.interface";

@Component({
  selector: 'offer-question-item',
  templateUrl: './question-item.component.html',
  styleUrl: './question-item.component.scss'
})
export class QuestionItemComponent {
  @Input() question: QuestionDto;

  getColor(chance: number) {
    if (chance < 30) return 'red';
    if (chance > 30 && chance < 70) return 'orange';
    return 'green';
  }
}
