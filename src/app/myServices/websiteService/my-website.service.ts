import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyWebsiteService {

  constructor(private http: HttpClient) { }
  private dataUrl = 'http://localhost:8001/api/society/post/1/';

  postUrl(id: number, url: string) {
    return this.http.post(this.dataUrl, url);
  }

}
