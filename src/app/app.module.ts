import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';

import { MenuComponent } from './prs/menu/menu/menu.component';

import * as user from './prs/user/user.imports';
import * as misc from './misc/misc.imports';

@NgModule({
  declarations: [
    AppComponent,MenuComponent,
    
    user.UserChangeComponent,user.UserCreateComponent,user.UserListComponent,
    user.UserLoginComponent,user.UserViewComponent,

    misc.HomeComponent,misc.AboutComponent,misc.E404Component,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
