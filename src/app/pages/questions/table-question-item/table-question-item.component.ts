import {Component, Input} from '@angular/core';
import {QuestionDto, QuestionList} from "../../../services/questions/questions.interface";

@Component({
  selector: 'offer-table-question-item',
  templateUrl: './table-question-item.component.html',
  styleUrl: './table-question-item.component.scss'
})
export class TableQuestionItemComponent {
  @Input() questions: QuestionList

  itemTracedBy(index: number, item: QuestionDto) {
    return item.id
  }

  getColor(chance: number) {
    if (chance < 30) return 'red';
    if (chance > 30 && chance < 70) return 'orange';
    return 'green';
  }
}
