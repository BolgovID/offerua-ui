import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/users/user.service";
import {LocalStorageService} from "../../../services/local-storage.service";

@Component({
  selector: 'offer-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent implements OnInit{
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit(): void {

  }
}
