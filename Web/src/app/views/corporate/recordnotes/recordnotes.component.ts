import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INoteModel } from 'src/app/model/note-model';
import { INoteservices } from 'src/app/services/ModuleInterfaces/INote-services';
import {INoteResponse} from 'src/app/model/note-response';
import swal from 'sweetalert2';

@Component({
  selector: 'app-recordnotes',
  templateUrl: './recordnotes.component.html',
  styleUrls: ['./recordnotes.component.scss']
})
export class RecordnotesComponent {
  working = false;
  uploadFile: File | null; 
  uploadFileLabel: string | undefined = 'Choose an image to upload';
  uploadProgress: number;
  uploadUrl: string;
  uploadFileName: string;
  uploadFileContent:string; 
  uploadfilesData: any;

  noteForm = new FormGroup({
    Subject: new FormControl('',[Validators.required]),
    Attachment: new FormControl('',[Validators.required]),
    Title: new FormControl('',[Validators.required]),
    Notes: new FormControl('',[Validators.required]),
 
  }); 
  constructor(private NoteService: INoteservices){ 
    this.uploadFile = null;
  this.uploadProgress =0;
  this.uploadUrl ='';
  this.uploadFileName ='';
  this.uploadFileContent ='';   
  }
  handleFileInput(uploadfiles: FileList) {  
    this.uploadfilesData = uploadfiles  
    for (let index = 0; index < this.uploadfilesData.length; index++) {
      const element = this.uploadfilesData[index];  
      if(element.type !== "image/png" && element.type !== "image/jpg" && element.type !== "image/jpeg" && element.type !== "application/pdf" ){
        swal.fire({title:"File type must be png, jpg, jpeg or pdf.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "error"});     
      }
    }    
  }
  


  onSubmit() {  
    if (this.uploadfilesData.length==0) {
      swal.fire({title:"Choose file to upload.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false});    
      return;   
    }
       
    let formData = new FormData();
  
    for (let index = 0; index < this.uploadfilesData.length; index++) {
      const element = this.uploadfilesData[index];
      if(element.type !== "image/png" && element.type !== "image/jpg" && element.type !== "image/jpeg" && element.type !== "application/pdf" ){
        swal.fire({title:"File type must be png, jpg, jpeg or pdf.", timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "error"});     
        return;
      }
      formData.append(element.name, element); 
      console.log(element);
    }   
    let userId = (Number)(localStorage.getItem('userId'));
    var model: INoteModel = {
      UserId: userId,
      Subject: this.noteForm.value.Subject ? this.noteForm.value.Subject : "",
      Title: this.noteForm.value.Title ? this.noteForm.value.Title : "",
      Notes: this.noteForm.value.Notes ? this.noteForm.value.Notes: "",
      Attachment: this.noteForm.value.Attachment ? this.noteForm.value.Attachment : "",
      Type: "UserNote",
    };  
    formData.append("NoteRequest",JSON.stringify(model))
    this.NoteService.note(model,formData).subscribe((response: any) => { 
      if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
       
        swal.fire({title:"Note submitted",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "success"});
      }
      else
      {
        swal.fire({title:"Note error.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "error"}); 
      } 
    }); 
  }

}
