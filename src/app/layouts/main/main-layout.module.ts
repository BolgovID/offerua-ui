import { NgModule } from "@angular/core";
import { MainLayoutComponent } from "./main-layout.component";
import { RouterModule } from "@angular/router";
import { QuestionsComponent } from "../../pages/questions/questions.component";
import { CommonModule } from "@angular/common";
import { AnswersComponent } from "../../pages/answers/answers.component";
import { TechnologyModule as TechModule } from "../../pages/technologies/tech.module";
import { MatIcon } from "@angular/material/icon";
import { HeaderComponent } from "../../common/header/header.component";
import { TechnologyComponent as TechComponent } from "../../pages/technologies/tech.component";
import { QuestionsModule } from "../../pages/questions/questions.module";
import { AnswersModule } from "../../pages/answers/answers.module";

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
            path: 'technologies',
            data: { breadcrumb: 'Technologies' },
            children: [
              {
                path: ':tech',
                children: [
                  {
                    path: 'questions',
                    data: { breadcrumb: 'Questions' },
                    children: [
                      { path: ':questionId', component: AnswersComponent, },
                    ],
                  },
                  { path: '', component: QuestionsComponent }
                ]
              },
              { path: '', component: TechComponent, },
            ],
          },
          { path: '', redirectTo: '/main/technologies', pathMatch: 'full' },
        ]
      },
    ]),

    // libraries
    CommonModule,
    MatIcon,

    // pages modules
    AnswersModule,
    TechModule,
    QuestionsModule,
  ],
})
export class MainLayoutModule {
}
