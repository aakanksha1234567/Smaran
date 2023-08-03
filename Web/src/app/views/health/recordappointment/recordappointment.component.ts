import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { IAppointmentModel } from 'src/app/model/Appointment-model';
import { IAppointmentService } from 'src/app/services/ModuleInterfaces/IAppointment-service';


@Component({
  selector: 'app-recordappointment',
  templateUrl: './recordappointment.component.html',
  styleUrls: ['./recordappointment.component.scss']
})
export class RecordappointmentComponent { 

  working = false;
  uploadFile: File | null; 
  uploadFileLabel: string | undefined = 'Choose an image to upload';
  uploadProgress: number;
  uploadUrl: string;
  uploadFileName: string;
  uploadFileContent:string; 
  uploadfilesData: any;

  appointmentForm = new FormGroup({
    appointmentAt: new FormControl('',[Validators.required]),
    appointmentTime: new FormControl(new Date(),[Validators.required]), 
    appointmentNotes: new FormControl(), 
    appointmentAttachment : new FormControl('',[Validators.required]), 
  });
  
constructor(private appointmentService : IAppointmentService){
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

onSubmit(){   
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
  var model: IAppointmentModel = { 
    UserId: userId,
    AppointmentAt: this.appointmentForm.value.appointmentAt ?? "",
    AppointmentNotes: this.appointmentForm.value.appointmentNotes ?? "", 
    AppointmentAttachment: this.appointmentForm.value.appointmentAttachment ?? "", 
    AppointmentTime: this.appointmentForm.value.appointmentTime ?  this.appointmentForm.value.appointmentTime :new Date(), 
  };  
 

  formData.append("AppointmentRequest",JSON.stringify(model))
  this.appointmentService.AddRecord(model,formData).subscribe((response: any) => { 
    if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 

        swal.fire({title:"Appointment Added Successfully.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "success"});   
    }
    else
    {
      swal.fire({title:"Appointment error.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "error"});    
    } 
  }); 
}  

}
