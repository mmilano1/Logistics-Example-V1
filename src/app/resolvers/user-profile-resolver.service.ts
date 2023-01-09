import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';
 
@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<any> {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // use userService to acquire data
    return of(
        {
            username: "_resolved_mmilano",
            f_name: "_resolved_Marko",
            l_name: "_resolved_Milanovits",
            user_id: "_resnolved_adircjcldcj99"
          }
    );
  }

}
