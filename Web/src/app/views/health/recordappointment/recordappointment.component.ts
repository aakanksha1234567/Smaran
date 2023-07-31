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
}  

handleFileInput(files: FileList) {
  if (files.length > 0) {
    this.uploadFile = files.item(0);
    this.uploadFileLabel = this.uploadFile?.name;
  }
}

onSubmit(){   
  if (!this.uploadFile) {
    swal.fire({title:"Choose file to upload.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false});    
    return;
  }

  const formData = new FormData();
    formData.append(this.uploadFile.name, this.uploadFile);
    

  var model: IAppointmentModel = { 
    AppointmentAt: this.appointmentForm.value.appointmentAt ?? "",
    AppointmentNotes: this.appointmentForm.value.appointmentNotes ?? "", 
    AppointmentAttachment: this.appointmentForm.value.appointmentAttachment ?? "", 
    AppointmentTime: this.appointmentForm.value.appointmentTime ?  this.appointmentForm.value.appointmentTime :new Date(), 
  };  
 
  this.appointmentService.AddRecord(model).subscribe((response: any) => { 
    if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
        swal.fire({title:"Appointment Added Successfully.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false});   
    }
    else
    {
      swal.fire({title:"Appointment error.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false});    
    } 
  }); 
}

}
