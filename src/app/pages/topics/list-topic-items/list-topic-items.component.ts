import {Component, Input} from '@angular/core';
import {TopicDtoList, TopicDtoWithQuestionCount} from "../../../services/topics/topic.interface";

@Component({
  selector: 'offer-list-topic-items',
  templateUrl: './list-topic-items.component.html',
  styleUrl: './list-topic-items.component.scss'
})
export class ListTopicItemsComponent {
  @Input('topic-item-list') topics: TopicDtoList;

  itemTracedBy(index: number, item: TopicDtoWithQuestionCount) {
    return item.topicDto.id
  }
}
