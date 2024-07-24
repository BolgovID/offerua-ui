import {NgModule} from "@angular/core";
import {MainLayoutComponent} from "./main-layout.component";
import {RouterModule} from "@angular/router";
import {QuestionsComponent} from "../../pages/questions/questions.component";
import {CommonModule} from "@angular/common";
import {AnswersComponent} from "../../pages/answers/answers.component";
import {TopicsModule} from "../../pages/topics/topics.module";
import {MatIcon} from "@angular/material/icon";
import {HeaderComponent} from "../../common/header/header.component";
import {TopicsComponent} from "../../pages/topics/topics.component";
import {QuestionsModule} from "../../pages/questions/questions.module";
import {AnswersModule} from "../../pages/answers/answers.module";

@NgModule({
  declarations: [
    HeaderComponent,
    MainLayoutComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          {
            path: 'topics',
            children: [
              {
                path: ':topicId',
                children: [
                  {
                    path: 'questions',
                    children: [
                      {path: ':questionId', component: AnswersComponent,},
                    ],
                  },
                  {path: '', component: QuestionsComponent}
                ]
              },
              {path: '', component: TopicsComponent,},
            ],
          },
          {path: '', redirectTo: '/main/topics', pathMatch: 'full'},
        ]
      },
    ]),

    // libraries
    CommonModule,
    MatIcon,

    // pages modules
    AnswersModule,
    TopicsModule,
    QuestionsModule,
  ],
})
export class MainLayoutModule {
}
