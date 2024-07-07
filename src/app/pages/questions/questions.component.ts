import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../services/questions/questions.service';
import {QuestionFilterRequest, QuestionPaginationResponse} from '../../services/questions/questions.interface';

@Component({
  selector: 'offer-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit {
  model: QuestionPaginationResponse;

  constructor(
    private route: ActivatedRoute,
    private service: QuestionService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('topicId') as string;

    this.service.getQuestions(id, new QuestionFilterRequest({}))
      .subscribe({
        next: (response) => {
          this.model = response;
        },
      });
  }

  getColor(chance: number) {
    if (chance < 30) return 'red';
    if (chance > 30 && chance < 70) return 'orange';
    return 'green';
  }
}
