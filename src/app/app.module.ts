import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main/main.component';
import {HeaderComponent} from './common/header/header.component';
import {provideHttpClient} from "@angular/common/http";
import {AnswersComponent} from './pages/answers/answers.component';
import {NgOptimizedImage} from "@angular/common";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatIcon} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    AnswersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    MatIcon,
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
