import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SigninComponent} from "../../pages/auth/./signin/signin.component";
import {AuthLayoutComponent} from "./auth-layout.component";
import {VerifyComponent} from "../../pages/auth/verify/verify.component";
import {SignupComponent} from "../../pages/auth/signup/signup.component";
import {ResetComponent} from "../../pages/auth/reset/reset.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CorsInterceptor} from "../../services/interceptors/CorsInterceptor";

@NgModule({
  declarations: [
    VerifyComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AuthLayoutComponent,
        children: [
          {
            path: 'signin',
            component: SigninComponent
          },
          {
            path: 'signup',
            component: SignupComponent
          },
          {
            path: 'verify',
            component: VerifyComponent
          },
          {
            path: 'forgot-password',
            component: ResetComponent
          },
          {path: '', redirectTo: '/auth/signin', pathMatch: 'full'},
        ]
      },
    ]),
    CommonModule,
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true
    },
  ]

})
export class AuthLayoutModule {
}
