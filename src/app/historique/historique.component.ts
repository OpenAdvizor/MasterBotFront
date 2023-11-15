import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ServicesService } from '../myServices/services.service';
import { HistoriqueData } from './historique.interface';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})

export class HistoriqueComponent implements OnInit {


  displayedColumns = ['select', 'TRAINING_MATERIAL', 'TYPE_ACTION', 'CHARACTERS', 'LAST_TRAINED', 'STATE', 'delete', 'retrain'];
  selection = new SelectionModel<HistoriqueData>(true, []);
  id: number;
  constructor(public servicesService: ServicesService) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    const token = localStorage.getItem('token');
    const decodedToken: jwt_decode.JwtPayload = jwt_decode.jwtDecode(token);
    this.id = decodedToken['id'];
    this.servicesService.getTable(this.id);
  }

  ngAfterViewInit() {
    this.servicesService.dataSource.sort = this.sort;
    this.servicesService.dataSource.paginator = this.paginator;
    this.paginator.pageSize = 10;
    this.paginator.pageIndex = 0;
  }


  deleteRow(row: HistoriqueData) {
    this.servicesService.deleteRowById(row.pk).subscribe({
      next: (data: any) => {
        if (data) {
          const index = this.servicesService.dataSource.data.findIndex(item => item === row);
          if (index >= 0) {
            this.servicesService.dataSource.data.splice(index, 1); // Remove the row from the data source array
            this.servicesService.dataSource.data = [...this.servicesService.dataSource.data]; // Update the data source
          }
          this.selection.deselect(row);

          // Refresh the table data by calling getTable() after deletion
          this.servicesService.getTable(this.id);
        }
      },
      error: (error: any) => {
        // Handle error
      },
      complete: () => {
        // Handle completion
      }
    });
  }


  retrainSelection(row: HistoriqueData) {
    /*  this.servicesService.RetrainById(row.ID_ACTION).subscribe(
         () => {
        */

  }


  selectTrainedRows() {
    const trainedRows = this.servicesService.dataSource.data.filter(row => row.state === 'trained');
    this.selection.select(...trainedRows);
  }

  selectUntrainedRows() {
    const untrainedRows = this.servicesService.dataSource.data.filter(row => row.state === 'not_trained');
    this.selection.select(...untrainedRows);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.servicesService.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.servicesService.dataSource.data.forEach(row => this.selection.select(row));
  }
}





