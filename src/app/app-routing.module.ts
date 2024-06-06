import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    title: 'Main',
    loadChildren: () => import('./layouts/main/main-layout.module').then(m => m.MainLayoutModule)
  },
  {
    path: '',
    loadChildren: () => import('./layouts/main/main-layout.module').then(m => m.MainLayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
