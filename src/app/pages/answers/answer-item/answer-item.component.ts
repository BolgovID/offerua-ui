import {Component, Input} from '@angular/core';
import {AnswerDto} from "../../../services/answers/answer.interface";
import { MASK_DATE } from '../../../contants/masks';

@Component({
  selector: 'offer-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrl: './answer-item.component.scss'
})
export class AnswerItemComponent {
  protected readonly MASK_DATE = MASK_DATE;
  @Input() answer: AnswerDto;
}
