import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users = [
    {
      name: 'Dummy',
      gender: 'male',
      email: 'dummy123@example.com',
      mobile: '1234567890',
      category: 'general',
      technology: ['python', 'javascript'],
      picture: '../../../assets/images/profile-icon.png'
    },
  ]

  getUsers(): Observable<any> {
    return of(this.users);
  }
  updateUsers(user: any) {
    this.users.push(user)
  }

}
