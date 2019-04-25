import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent,
    children: [
      { path: '', redirectTo: 'cats', pathMatch: 'full' },
      { path: 'cats', component: CatListComponent },
      { path: 'cat/:id', component: CatDetailsComponent },
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
