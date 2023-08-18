import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import {IMedicalReportResponse} from 'src/app/model/medicalreport-response';
import { IMedicalReportModel } from 'src/app/model/medicalreport-model';
import { IMedicalReportservices } from 'src/app/services/ModuleInterfaces/IMedicalReport-services';

@Component({
  selector: 'app-recordmedicalreport',
  templateUrl: './recordmedicalreport.component.html',
  styleUrls: ['./recordmedicalreport.component.scss']
})
export class RecordmedicalreportComponent {
  working = false;
  uploadFile: File | null; 
  uploadFileLabel: string | undefined = 'Choose an image to upload';
  uploadProgress: number;
  uploadUrl: string;
  uploadFileName: string;
  uploadFileContent:string; 
  uploadfilesData: any;

  medicalreportForm = new FormGroup({
    GivenBy: new FormControl('',[Validators.required]),
    Attachment: new FormControl('',[Validators.required]),
    Title: new FormControl('',[Validators.required]),
    Comments: new FormControl(''),
 
  }); 
  constructor(private MedicalReportservices: IMedicalReportservices) {
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
    var model: IMedicalReportModel = {
      UserId: userId,
      Title: this.medicalreportForm.value.Title ? this.medicalreportForm.value.Title : "",
      Comments: this.medicalreportForm.value.Comments ? this.medicalreportForm.value.Comments : "",
      Attachment: this.medicalreportForm.value.Attachment ? this.medicalreportForm.value.Attachment : "",
      GivenBy: this.medicalreportForm.value.GivenBy ? this.medicalreportForm.value.GivenBy : "",
    };  
    formData.append("MedicalReportRequest",JSON.stringify(model))
    this.MedicalReportservices.medicalreport(model,formData).subscribe((response: any) => { 
      if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
        
        swal.fire({title:"Medical Report submitted",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "success"});  
      }
      else
      {
        swal.fire({title:"Medical report error.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "error"});
      } 
    }); 
  }

}
