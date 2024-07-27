import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topics/topic.service';
import { TopicDtoList } from '../../services/topics/topic.interface';

@Component({
  selector: 'offer-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss',
})
export class TopicsComponent implements OnInit {
  protected topicList: TopicDtoList;

  constructor(
    private topicService: TopicService,
  ) { }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe({
      next: (response) => {
        this.topicList = response
      }
    });
  }
}
