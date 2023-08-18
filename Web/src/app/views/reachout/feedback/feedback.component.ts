import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFeedbackModel } from 'src/app/model/Feedback-model';
import {IFeedbackResponse} from 'src/app/model/feedback-response';
import { IFeedbackservices } from 'src/app/services/ModuleInterfaces/IFeedback-services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  working = false;
  uploadFile: File | null; 
  uploadFileLabel: string | undefined = 'Choose an image to upload';
  uploadProgress: number;
  uploadUrl: string;
  uploadFileName: string;
  uploadFileContent:string; 
  uploadfilesData: any;

  feedbackForm = new FormGroup({
    comments: new FormControl('',[Validators.required]),
    attachment: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email,Validators.required]), 
 
  }); 
  constructor(private feedbackservices: IFeedbackservices) {
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
    var model: IFeedbackModel = {
      UserId: userId,
      Comments: this.feedbackForm.value.comments ? this.feedbackForm.value.comments : "",
      Email: this.feedbackForm.value.email ? this.feedbackForm.value.email : "",
      Attachment: this.feedbackForm.value.attachment ? this.feedbackForm.value.attachment: ""
    };  

    formData.append("FeedbackRequest",JSON.stringify(model))
  this.feedbackservices.feedback(model,formData).subscribe((response: any) => { 
    if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 

        swal.fire({title:"Feedback Added Successfully.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "success"});   
    }
    else
    {
      swal.fire({title:"Feedback error.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "error"});    
    } 
  })
  
  }
}
