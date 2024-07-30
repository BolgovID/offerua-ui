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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomInputsModule } from "../../common/inputs/inputs.module";

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionItemComponent,
    ListQuestionItemComponent,
    SearchQuestionComponent,
    BannerItemComponent,
    AddQuestionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIcon,
    FormsModule,
    ReactiveFormsModule,
    CustomInputsModule,
  ]
})
export class QuestionsModule { }
