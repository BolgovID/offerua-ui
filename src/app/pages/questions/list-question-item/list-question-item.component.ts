import {Component, Input, OnInit} from '@angular/core';
import {QuestionDto, QuestionList} from "../../../services/questions/questions.interface";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'offer-list-question-item',
  templateUrl: './list-question-item.component.html',
  styleUrl: './list-question-item.component.scss'
})
export class ListQuestionItemComponent implements OnInit{
  @Input() questions: QuestionList


  ngOnInit(): void {  
    
  }

  itemTracedBy(index: number, item: QuestionDto) {
    return item.id
  }

}
