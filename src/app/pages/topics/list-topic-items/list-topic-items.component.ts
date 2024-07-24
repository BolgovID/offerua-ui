import {Component, Input} from '@angular/core';
import {TopicDto, TopicDtoList} from "../../../services/topics/topic.interface";

@Component({
  selector: 'offer-list-topic-items',
  templateUrl: './list-topic-items.component.html',
  styleUrl: './list-topic-items.component.scss'
})
export class ListTopicItemsComponent {
  @Input('topic-item-list') topics: TopicDtoList;

  itemTracedBy(index: number, item: TopicDto) {
    return item.id
  }
}
