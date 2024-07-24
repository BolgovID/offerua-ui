import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {QuestionsComponent} from "./questions.component";
import {TableQuestionItemComponent} from "./table-question-item/table-question-item.component";

@NgModule({
  declarations: [
    QuestionsComponent,
    TableQuestionItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class QuestionsModule {

}
