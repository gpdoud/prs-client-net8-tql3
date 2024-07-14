import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as user from './prs/user/user.imports';
import * as misc from './misc/misc.imports';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'user/login', component: user.UserLoginComponent },
  { path: 'user/list', component: user.UserListComponent },
  { path: 'user/view/:id', component: user.UserViewComponent },
  { path: 'user/create', component: user.UserCreateComponent },
  { path: 'user/change/:id', component: user.UserChangeComponent },

  { path: 'home', component: misc.HomeComponent },
  { path: 'about', component: misc.AboutComponent },
  
  { path: '**', component: misc.E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
