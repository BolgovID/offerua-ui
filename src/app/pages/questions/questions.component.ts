import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/questions/questions.service';
import { AllTechQuestionResponse, QuestionDto, QuestionPaginationRequest, QuestionPaginationResponse, TopicDto } from '../../services/questions/questions.interface';
import { TopicsService } from '../../services/topics/topics.service';
import { mergeMap } from 'rxjs';
import { SnakeBarService } from '../../services/snake-bar.service';

@Component({
  selector: 'offer-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent implements OnInit {
  editingMode: boolean = false;
  model?: AllTechQuestionResponse

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private topicService: TopicsService,
    private snakeBarService: SnakeBarService
  ) {
  }

  ngOnInit(): void {
    const techName = this.route.snapshot.paramMap.get('tech') as string;

    this.questionService.getQuestions(techName, new QuestionPaginationRequest({}))
      .subscribe({
        next: (response) => {
          this.model = response;
        },
      });
  }


  showCreateQuestionMenu(): void {
    this.editingMode = !this.editingMode
  }

  createQuestion(event: { question: string, topicName: string, topicId: string }) {
    const topicId = event.topicId
    const questionText = event.question

    if (!topicId) {
      const topicName = event.topicName;

      this.topicService.createTopic(this.model!.technology.id, topicName)
        .pipe(
          mergeMap((topic) => {
            this.model?.topics.push(topic);
            return this.questionService.createQuestion(questionText, topic.id);
          })
        ).subscribe({
          next: (response) => {
            const savedQuestion = response as QuestionDto;
            this.appendQuestionList(savedQuestion)
          }
        });
    } else {
      this.questionService.createQuestion(questionText, topicId).subscribe({
        next: response => {
          var savedQuestion = response as QuestionDto
          this.appendQuestionList(savedQuestion)
        }
      });
    }
  }

  private appendQuestionList(question: QuestionDto) {
    this.snakeBarService.showMessage(`Question ${question.question} successfully created!`);
    this.model?.questions.content.push(question);
    this.model!.questions.totalElements++
  }
}
