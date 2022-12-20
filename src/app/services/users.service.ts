import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUserDTO, User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'https://young-sands-07814.herokuapp.com/api/users';

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: CreateUserDTO){
    return this.http.post<User>(this.apiUrl, user)
  }

  getAll(){
    return this.http.get<User[]>(this.apiUrl)
  }
}
