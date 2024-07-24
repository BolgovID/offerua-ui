import {Component, Input} from '@angular/core';
import {TopicDto} from "../../../services/topics/topic.interface";

@Component({
  selector: 'offer-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrl: './topic-item.component.scss'
})
export class TopicItemComponent {
  @Input('topic-item') topic!: TopicDto;
}
