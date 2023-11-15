import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../myServices/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * An object representing the user for the login form
   */
  public user: any;

  constructor(private _userService: UserServiceService) { }

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    };
  }

  login() {
    this._userService.login({ 'email': this.user.email, 'password': this.user.password });
  }


  logout() {
    this._userService.logout();
  }
}
