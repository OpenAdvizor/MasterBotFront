import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyWebsiteService } from '../myServices/websiteService/my-website.service';

@Component({
  selector: 'app-website-url',
  templateUrl: './website-url.component.html',
  styleUrls: ['./website-url.component.css']
})
export class WebsiteUrlComponent {
  websiteUrl: string = '';
  constructor(private websiteUrlService: MyWebsiteService) {}


  onSubmit() {
  

      if(!this.websiteUrl || this.websiteUrl.trim() === ''){

      this.websiteUrlService.postUrl(1,this.websiteUrl).subscribe({
        next: () => {
              (data:any) => {
                console.log(data);
              }
        },
        error: (error:any) =>{
    
        },
        complete: () => {
    
        }
      });
     

    
  }


}}
