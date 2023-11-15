import { Component } from '@angular/core';
import { HistoriqueComponent } from '../historique/historique.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  historiqueComponent: HistoriqueComponent;

  selectUntrained() {
    this.historiqueComponent.selectUntrainedRows();
  }

  selectTrained() {
    this.historiqueComponent.selectTrainedRows();
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

}
