import {NgModule} from "@angular/core";
import {TechnologyComponent} from "./tech.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TechItemComponent} from "./tech-item/tech-item.component";
import {ListTopicItemsComponent as ListTechItemsComponent} from "./list-tech-items/list-tech-items.component";
import {MatIcon} from "@angular/material/icon";


@NgModule({
  declarations: [
    TechnologyComponent,
    ListTechItemsComponent,
    TechItemComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatIcon
    ],
})
export class TechnologyModule {

}
