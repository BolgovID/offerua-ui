import {NgModule} from "@angular/core";
import {MainLayoutComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {TopicsComponent} from "../../pages/topics/topics.component";
import {QuestionsComponent} from "../../pages/questions/questions.component";
import {CommonModule} from "@angular/common";
import {AnswersComponent} from "../../pages/answers/answers.component";

@NgModule({
  declarations: [
    TopicsComponent,
    QuestionsComponent,
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
                      {
                        path: ':questionId',
                        component: AnswersComponent,
                      },
                    ],
                  },
                  {
                    path: '',
                    component: QuestionsComponent
                  }
                ]
              },
              {
                path: '',
                component: TopicsComponent,
              },
            ],
          },
          {path: '', redirectTo: '/main/topics', pathMatch: 'full'},
        ]
      },
    ]),
    CommonModule,
  ],
})
export class MainLayoutModule {
}
