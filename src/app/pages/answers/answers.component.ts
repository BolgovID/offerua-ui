import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnswerFilterRequest, AnswersByQuestionResponse} from "../../services/answers/answer.interface";
import {AnswerService} from "../../services/answers/answer.service";

@Component({
  selector: 'offer-answers',
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss'
})
export class AnswersComponent implements OnInit {
  model?: AnswersByQuestionResponse


  constructor(
    private route: ActivatedRoute,
    private service: AnswerService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('questionId') as string
    this.service.getAnswers(id, new AnswerFilterRequest({pageNo: 0}))
      .subscribe({
          next: (response) => {
            this.model = response
          }
        }
      )
  }
}

