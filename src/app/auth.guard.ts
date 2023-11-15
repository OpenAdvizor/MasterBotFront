import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserServiceService } from './myServices/userService/user-service.service';
import { Observable } from 'rxjs';

export interface IsDirty {
  isDirty(): boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})


export class AuthGuardService implements CanActivate {

  constructor(public user: UserServiceService, public router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token')
    if (!token) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}