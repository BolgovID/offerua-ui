import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SigninComponent} from "../../pages/auth/signin/signin.component";
import {AuthLayoutComponent} from "./auth-layout.component";
import {VerifyComponent} from "../../pages/auth/verify/verify.component";
import {SignupComponent} from "../../pages/auth/signup/signup.component";
import {ResetComponent} from "../../pages/auth/reset/reset.component";
import {VerificationComponent} from "../../pages/verification/verification.component";
import {MatIcon} from "@angular/material/icon";

@NgModule({
  declarations: [
    AuthLayoutComponent,
    SigninComponent,
    VerificationComponent,
    SignupComponent,
    ResetComponent,
    VerifyComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AuthLayoutComponent,
        children: [
          {path: 'signin', component: SigninComponent},
          {path: 'signup', component: SignupComponent},
          {path: 'verify', component: VerifyComponent},
          {path: 'forgot-password', component: ResetComponent},
          {path: '', redirectTo: '/auth/signin', pathMatch: 'full'},
        ]
      },
    ]),
    CommonModule,
    MatIcon,
  ],
})
export class AuthLayoutModule {
}
