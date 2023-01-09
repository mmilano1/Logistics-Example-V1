import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUser: User = {
    username: "mmilano",
    f_name: "Marko",
    l_name: "Milanovits",
    user_id: "adircjcldcj99"
  }

  constructor() { }

  inti(){
    // init service that will handle maybe first authentication 
  }

  getUser(): User{
    return this.loggedInUser;
  }

}
