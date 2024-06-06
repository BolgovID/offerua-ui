import { NgModule } from "@angular/core";
import { MainLayoutComponent } from "./main.component";
import { RouterModule } from "@angular/router";
import { TopicsComponent } from "../../pages/topics/topics.component";
import { HeaderComponent } from "../../common/header/header.component";

@NgModule({
    declarations: [
        
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MainLayoutComponent,
                children: [
                    { path: 'topics', component: TopicsComponent },
                    { path: '', redirectTo: '/main/topics', pathMatch: 'full' },
                ]
            },

        ])
    ],
})
export class MainLayoutModule { }