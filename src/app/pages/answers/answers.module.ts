import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AnswersComponent} from "./answers.component";
import {MatIcon} from "@angular/material/icon";
import {ListAnswerItemComponent} from "./list-answer-item/list-answer-item.component";
import {AnswerItemComponent} from "./answer-item/answer-item.component";

@NgModule({
  declarations: [
    AnswersComponent,
    ListAnswerItemComponent,
    AnswerItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIcon
  ],
})
export class AnswersModule {

}
