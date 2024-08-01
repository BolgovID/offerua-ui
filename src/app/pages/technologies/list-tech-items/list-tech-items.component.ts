import {Component, Input} from '@angular/core';
import {TechDtoList, TechDtoWithQuestionCount} from "../../../services/technologies/technology.interface";

@Component({
  selector: 'offer-list-tech-items',
  templateUrl: './list-tech-items.component.html',
  styleUrl: './list-tech-items.component.scss'
})
export class ListTopicItemsComponent {
  @Input('tech-item-list') technologies: TechDtoList;

  itemTracedBy(index: number, item: TechDtoWithQuestionCount) {
    return item.technologyDto.id
  }
}
