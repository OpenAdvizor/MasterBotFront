import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-my-tabs',
  templateUrl: './my-tabs.component.html',
  styleUrls: ['./my-tabs.component.css']
})
export class MyTabsComponent {
  error!: string;
  dragAreaClass!: string;
  draggedFiles: any;
  

  saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      console.log(files[0].size,files[0].name,files[0].type);
      this.draggedFiles = files;
      console.log(files);
    }
  }

  








  
}