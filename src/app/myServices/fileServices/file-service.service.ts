import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private http: HttpClient) { }

  private dataUrl = 'http://localhost:8001/TextBot/config/1';


  uploadFile(file: File, prompt: string): Observable<any> {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('prompt', prompt);


    const headers = new HttpHeaders();

    return this.http.post(this.dataUrl, formData, { headers });
  }
}
