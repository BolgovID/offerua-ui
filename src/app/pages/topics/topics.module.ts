import {NgModule} from "@angular/core";
import {TopicsComponent} from "./topics.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TopicItemComponent} from "./topic-item/topic-item.component";
import {ListTopicItemsComponent} from "./list-topic-items/list-topic-items.component";
import {MatIcon} from "@angular/material/icon";


@NgModule({
  declarations: [
    TopicsComponent,
    ListTopicItemsComponent,
    TopicItemComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatIcon
    ],
})
export class TopicsModule {

}
