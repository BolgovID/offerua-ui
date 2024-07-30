import { Component, Input } from '@angular/core';
import { TopicList } from '../../../services/questions/questions.interface';

@Component({
  selector: 'offer-search-question',
  templateUrl: './search-question.component.html',
  styleUrl: './search-question.component.scss'
})
export class SearchQuestionComponent {
  @Input() topics!: TopicList

}
