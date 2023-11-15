import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FileServiceService } from '../myServices/fileServices/file-service.service';
import { FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../myServices/services.service';
import { HistoriqueComponent } from "../historique/historique.component"
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-drag-and-drop-files',
  templateUrl: './drag-and-drop-files.component.html',
  styleUrls: ['./drag-and-drop-files.component.css']
})
export class DragAndDropFilesComponent {
  selectedFile: File | null = null;
  prompt = new FormControl('');

  getErrorMessage() {
    if (!this.prompt) {
      return 'You must enter a value';
    }
    return this.prompt.hasError('prompt') ? 'Not a valid prompt' : '';
  }

  constructor(private fileService: FileServiceService, private servicesService: ServicesService) { }
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      this.selectedFile = selectedFile;
      const allowedExtensions = ['.docx', '.pdf', '.csv', '.txt'];
      const fileExtension = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')).toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        this.selectedFile = selectedFile;
      } else {
        // Display an error message or handle the case where the file extension is not allowed.
        console.error('Invalid file extension');
        // You can also set an error message here if you want to notify the user.
      }
    }
  }


  uploadFile() {//todo
    if (this.selectedFile) {
      this.fileService.uploadFile(this.selectedFile, this.prompt.value).subscribe({
        next: (data: any) => {
          console.log('File uploaded successfully', data);
          const token = localStorage.getItem('token');
          const decodedToken: jwt_decode.JwtPayload = jwt_decode.jwtDecode(token);
          this.servicesService.getTable(decodedToken['id']);
        },

        error: (error: any) => {

        },
        complete: () => {

        }
      });
    }
  }


}