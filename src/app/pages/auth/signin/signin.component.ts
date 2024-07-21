import {Component} from '@angular/core';
import {UserService} from "../../../services/users/user.service";
import {TopicService} from "../../../services/topics/topic.service";

@Component({
  selector: 'offer-login',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  protected readonly navigator = navigator;

  constructor(
    private userService: UserService,
    private topicService: TopicService) {
  }

  doSignIn() {
    this.userService.signIn("username", "password").subscribe({
        next: response => console.log(response)
      }
    )
  }

  doFuck() {
    this.topicService.getTopics().subscribe({ next: resp=> console.log(resp)})
  }
}
