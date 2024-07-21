import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    title: 'Main',
    loadChildren: () => import('./layouts/main/main-layout.module').then(m => m.MainLayoutModule)
  },
  {
    path: 'auth',
    title: 'Auth',
    loadChildren: () => import('./layouts/auth/auth-layout.module').then(m => m.AuthLayoutModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
