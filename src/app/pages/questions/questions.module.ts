import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { QuestionsComponent } from "./questions.component";
import { QuestionItemComponent } from './question-item/question-item.component';
import { ListQuestionItemComponent } from './list-question-item/list-question-item.component';
import { MatIcon } from "@angular/material/icon";
import { SearchQuestionComponent } from './search-question/search-question.component';
import { BannerItemComponent } from './banner-item/banner-item.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomInputsModule } from "../../common/inputs/inputs.module";
import { TopicAutocompleteComponent } from './add-question/topic-autocomplete/topic-autocomplete.component';
import { DirectivesModule } from "../../directives/directives.module";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionItemComponent,
    ListQuestionItemComponent,
    SearchQuestionComponent,
    BannerItemComponent,
    AddQuestionComponent,
    TopicAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIcon,
    FormsModule,
    ReactiveFormsModule,
    CustomInputsModule,
    DirectivesModule,
    PipesModule
  ]
})
export class QuestionsModule { }
