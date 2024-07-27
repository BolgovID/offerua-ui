import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {QuestionsComponent} from "./questions.component";
import {QuestionItemComponent} from './question-item/question-item.component';
import {ListQuestionItemComponent} from './list-question-item/list-question-item.component';
import {MatIcon} from "@angular/material/icon";
import { QuestionFilterComponent } from './question-filter/question-filter.component';
import { QuestionMetainfoComponent } from './question-metainfo/question-metainfo.component';
import { QuestionTradingMembersComponent } from './question-trading-members/question-trading-members.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionItemComponent,
    ListQuestionItemComponent,
    QuestionFilterComponent,
    QuestionMetainfoComponent,
    QuestionTradingMembersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIcon
  ]
})
export class QuestionsModule {

}
