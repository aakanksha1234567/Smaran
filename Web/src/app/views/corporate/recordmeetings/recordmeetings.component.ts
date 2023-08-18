import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMeetingModel } from 'src/app/model/meeting';
import { IMeetingservices } from 'src/app/services/ModuleInterfaces/IMeeting-services';
import swal from 'sweetalert2';
import {IMeetingResponse} from 'src/app/model/meeting-response';

@Component({
  selector: 'app-recordmeetings',
  templateUrl: './recordmeetings.component.html',
  styleUrls: ['./recordmeetings.component.scss']
})
export class RecordmeetingsComponent {
  working = false;
  uploadFile: File | null; 
  uploadFileLabel: string | undefined = 'Choose an image to upload';
  uploadProgress: number;
  uploadUrl: string;
  uploadFileName: string;
  uploadFileContent:string; 
  uploadfilesData: any;

  meetingForm = new FormGroup({
    MeetingWith: new FormControl('',[Validators.required]),
    MeetingTime: new FormControl(new Date(),[Validators.required]),
    MeetingPlace:new FormControl('',[Validators.required]),
    Notes :new FormControl('',[Validators.required]),
    Link : new FormControl('',[Validators.required]),
    Attachment : new FormControl('',[Validators.required]),
});

constructor(private MeetingService: IMeetingservices){
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
  var model: IMeetingModel = {
    UserId: userId,
    MeetingWith: this.meetingForm.value.MeetingWith ??"",
    MeetingTime: this.meetingForm.value.MeetingTime ? this.meetingForm.value.MeetingTime : new Date(),
    MeetingPlace: this.meetingForm.value.MeetingPlace ??"",
    Notes: this.meetingForm.value.MeetingPlace ??"",
    Attachment: this.meetingForm.value.Attachment ??"",
    Link: this.meetingForm.value.Link ??"",
  };  

  formData.append("MeetingRequest",JSON.stringify(model))
  alert(1);
  this.MeetingService.meeting(model,formData).subscribe((response: any) => { 
    if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
      
      swal.fire({title:"Meeting Recorded",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "success"});  
    }
    else
    {
      swal.fire({title:"Meeting error.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "error"});    
    } 
  }); 
}
}
