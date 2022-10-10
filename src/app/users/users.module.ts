import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';


@NgModule({
  declarations: [
    CreateUserComponent,
    ViewAllUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
