import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/users/user.service";
import {LocalStorageService} from "../../../services/local-storage.service";

@Component({
  selector: 'offer-invite',
  templateUrl: './verify.component.html',
})
export class VerifyComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    const data = this.route.snapshot.queryParams["data"] as string
    this.userService.confirmRegistration(data)
      .subscribe({
        next: response => {
          this.localStorage.setUserAuth(response)
          this.router.navigate(["/main"])
        }
      })
  }
}
