import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/users/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SnakeBarService } from "../../../services/snake-bar.service";
import { usernameValidator, passwordValidator, isValid } from '../../../contants/validators';

@Component({
  selector: 'offer-login',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  public signInForm: FormGroup;

  public isValid = isValid;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snakeBar: SnakeBarService
  ) {
  }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      username: ['', usernameValidator],
      password: ['', passwordValidator],
    });
  }

  doSignIn() {
    if (this.signInForm.valid) {
      const { username, password } = this.signInForm.getRawValue()
      this.userService.signIn(username, password).subscribe({
        next: response => {
          this.router.navigate(['/main'])
          this.snakeBar.showMessage(`Welcome ${username}!`)
        }
      });
    }
  }
}
