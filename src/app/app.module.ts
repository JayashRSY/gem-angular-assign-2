import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
