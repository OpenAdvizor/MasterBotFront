import { Component } from '@angular/core';
import { ServicesService } from '../myServices/services.service';
import { Company } from './company.interface';
import * as jwt_decode from 'jwt-decode';
import { UserServiceService } from '../myServices/userService/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  companyName = "";
  showMessage = false;
  company: Company = { id: 0, society: '' };

  constructor(private servicesService: ServicesService, private user: UserServiceService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const decodedToken: jwt_decode.JwtPayload = jwt_decode.jwtDecode(token);
    console.log(decodedToken['id']);
    this.getCompanyName(decodedToken['id']);
  }

  getCompanyName(id: number) {
    this.servicesService.getName(id).subscribe((data: any) => {
      this.companyName = data.society;
      this.company.id = data.id;
      this.company.society = data.society;
    });
  }

  updateCompanyName() {
    this.servicesService.updateCompanyName(this.company.id, this.companyName).subscribe((data: any) => {
      if (data) {
        this.showMessage = true;
        // Show the message for 3 seconds (adjust the time as needed)
        setTimeout(() => {
          this.hideMessage();
        }, 3000);
      }
    });
  }

  hideMessage() {
    this.showMessage = false;
  }

  logOut() {
    this.user.logout();
  }
}
