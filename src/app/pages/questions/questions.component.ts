import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/questions/questions.service';
import { AllTechQuestionResponse, QuestionPaginationRequest, QuestionPaginationResponse } from '../../services/questions/questions.interface';

@Component({
  selector: 'offer-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit {
  model?: AllTechQuestionResponse
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private service: QuestionService,
  ) {
  }

  ngOnInit(): void {
    const techName = this.route.snapshot.paramMap.get('tech') as string;

    this.service.getQuestions(techName, new QuestionPaginationRequest({}))
      .subscribe({
        next: (response) => {
          this.model = response;
        },
      });

      setTimeout(() => {
        this.switchEditingMode();
      }, 300);
  }

  switchEditingMode() {
    this.isEditing = !this.isEditing
  }
}
