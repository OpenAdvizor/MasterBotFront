import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Company } from '../header/company.interface';
import { MatTableDataSource } from '@angular/material/table';
import { HistoriqueData } from '../historique/historique.interface';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  private dataUrl = 'http://localhost:8001/api/';
  dataSource = new MatTableDataSource<HistoriqueData>();

  constructor(private http: HttpClient) { }

  getTable(id: number) {
    this.getData(id).subscribe((data: any) => {
      console.log(JSON.parse(data.trainings));
      this.dataSource.data = JSON.parse(data.trainings);
    });
  }

  getName(id: Number): Observable<Company> {
    return this.http.get<Company>(this.dataUrl + "society/get/" + id);
  }

  updateCompanyName(id: number, newName: string): Observable<any> {
    this.dataUrl = this.dataUrl + "society/updateNameById/" + id;
    return this.http.put(this.dataUrl, { "society": newName });
  }

  getData(id: Number): Observable<any> {
    return this.http.get(this.dataUrl + "training/getAllBySocId/" + id);
  }

  getHistoriqueData(id: Number): Observable<any[]> {
    return this.getData(id).pipe(
      map((data: any) => data.historique)
    );
  }

  deleteRowById(id: number): Observable<any> {
    return this.http.delete(this.dataUrl + "training/delete/" + id);
  }

  retrainRowById(id: number): Observable<any> {
    return this.http.delete(this.dataUrl + '/' + id);
  }

}
