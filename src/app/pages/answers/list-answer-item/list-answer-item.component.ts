import {Component, Input} from '@angular/core';
import {AnswerDto, AnswerList} from "../../../services/answers/answer.interface";

@Component({
  selector: 'offer-list-answer-item',
  templateUrl: './list-answer-item.component.html',
  styleUrl: './list-answer-item.component.scss'
})
export class ListAnswerItemComponent {
  @Input() answerList: AnswerList

  itemTracedBy(index: number, item: AnswerDto) {
    return item.id
  }
}
