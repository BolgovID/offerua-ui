import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnakeBarService} from "./services/snake-bar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'offerua';

  constructor(
    private snakeBar: MatSnackBar,
    private snakeBarService: SnakeBarService
  ) {
  }

  ngOnInit(): void {

    this.snakeBarService.onMessage$.subscribe((message) => {
      this.snakeBar.open(message, "ok", {verticalPosition: 'top'})
    })
  }

}
