import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TopicService } from '../../services/topics/topic.service';
import { TopicDto } from '../../services/topics/topic.interface';

@Component({
  selector: 'offer-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss',
})
export class TopicsComponent implements OnInit {
  topics: TopicDto[];

  constructor(
    private topicService: TopicService,
  ) { }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe({
      next: (response) => {
        this.topics = response;
      }
    })
  }
}
