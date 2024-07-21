import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main/main-layout.component';
import {HeaderComponent} from './common/header/header.component';
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";
import {AnswersComponent} from './pages/answers/answers.component';
import {NgOptimizedImage} from "@angular/common";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatIcon} from "@angular/material/icon";
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {SigninComponent} from './pages/auth/./signin/signin.component';
import {VerificationComponent} from './pages/verification/verification.component';
import {SignupComponent} from './pages/auth/signup/signup.component';
import {ResetComponent} from './pages/auth/reset/reset.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RequestStatusHandlerInterceptor} from "./services/interceptors/requestStatusHandlerInterceptor";
import {CorsInterceptor} from "./services/interceptors/CorsInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    AnswersComponent,
    AuthLayoutComponent,
    SigninComponent,
    VerificationComponent,
    SignupComponent,
    ResetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    MatIcon,
    MatSnackBarModule,
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestStatusHandlerInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
