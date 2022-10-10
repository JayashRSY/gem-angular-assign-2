import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  constructor(private _userService:UsersService) { }

  users: any = []
  ngOnInit(): void {
    this._userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

}
