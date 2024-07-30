import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TopicDto, TopicList } from '../../../services/questions/questions.interface';
import { Observable, map, startWith } from 'rxjs';

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

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      question: [''],
      topicName: [''],
      topicId: [''],
    })
  }

  switchAddingNewTopic() {
    this.isAddingNewTopic = !this.isAddingNewTopic;
  }

  addQuestion() {
    const newQuestion = this.questionForm.getRawValue();

    console.log(newQuestion)
  }



  onSelect(selected: any) {
    this.questionForm.patchValue({ topicName: selected.name, topicId: selected.id })
  }

  onTyping(text: any) {
    this.questionForm.patchValue({ topicName: text, topicId: null })
  }
}
