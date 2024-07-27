import {Component, Input} from '@angular/core';
import {QuestionDto, QuestionList} from "../../../services/questions/questions.interface";

@Component({
  selector: 'offer-list-question-item',
  templateUrl: './list-question-item.component.html',
  styleUrl: './list-question-item.component.scss'
})
export class ListQuestionItemComponent {
  @Input() questions: QuestionList

  itemTracedBy(index: number, item: QuestionDto) {
    return item.id
  }
}
