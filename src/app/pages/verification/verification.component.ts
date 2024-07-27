import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/users/user.service";

@Component({
  selector: 'offer-verification',
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        const data = params['data'] || null;
        if (data) {
          this.userService.confirmRegistration(data)
            .subscribe((response: any) => {
              console.log(response)
            }, (err: any) => {
              if (err) {
                alert('invalid confirmation link');
              }
            })
        } else {
          alert('missing data')
        }
      }
    )
  }
}
