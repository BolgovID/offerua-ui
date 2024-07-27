import {Component, Input} from '@angular/core';

@Component({
  selector: 'offer-question-metainfo',
  templateUrl: './question-metainfo.component.html',
  styleUrl: './question-metainfo.component.scss'
})
export class QuestionMetainfoComponent {
  @Input() numberOfQuestions: number;

}
