import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopicDto, TopicList } from '../../../services/questions/questions.interface';
import { Observable, map, startWith } from 'rxjs';
import { addQuestionValidator } from '../../../contants/validators';
import { SnakeBarService } from '../../../services/snake-bar.service';

export interface dto {
  question: string,
  topicName: string,
  customTopicName: string,
}

@Component({
  selector: 'offer-add-question',
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.scss'
})
export class AddQuestionComponent implements OnInit {
  @Input() topics: TopicList;

  private isAddingNewTopic = false;
  public questionForm!: FormGroup;

  filteredOptions: Observable<TopicList>;

  typedTopic: string;
  option: string;

  @Output() createdQuestion = new EventEmitter<any>

  constructor(
    private formBuilder: FormBuilder,
    private snakeBar: SnakeBarService
  ) { }

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      question: ['', addQuestionValidator],
      topicName: ['', Validators.required],
      topicId: [''],
    })
  }

  switchAddingNewTopic() {
    this.isAddingNewTopic = !this.isAddingNewTopic;
  }

  addQuestion() {
    if (this.questionForm.valid) {
      const newQuestion = this.questionForm.getRawValue();
      this.createdQuestion.emit(newQuestion)

      const topicValue = this.questionForm.get('topicName')?.value
      const topicIdValue = this.questionForm.get('topicId')?.value

      this.questionForm.reset({ topicName: topicValue, topicId: topicIdValue })
    } else {
      this.snakeBar.showMessage("The required fields missing")
    }
  }

  onSelectTopic(selected: any) {
    this.questionForm.patchValue({ topicName: selected.name, topicId: selected.id })
  }
}
