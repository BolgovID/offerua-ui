import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { QuestionsComponent } from "./questions.component";
import { QuestionItemComponent } from './question-item/question-item.component';
import { ListQuestionItemComponent } from './list-question-item/list-question-item.component';
import { MatIcon } from "@angular/material/icon";
import { SearchQuestionComponent } from './search-question/search-question.component';
import { BannerItemComponent } from './banner-item/banner-item.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionItemComponent,
    ListQuestionItemComponent,
    SearchQuestionComponent,
    BannerItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIcon,
  ]
})
export class QuestionsModule {

}
