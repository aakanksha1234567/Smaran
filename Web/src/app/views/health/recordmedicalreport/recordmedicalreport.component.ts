import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import {IMedicalReportResponse} from 'src/app/model/medicalreport-response';
import { Router } from '@angular/router';
import { IMedicalReportModel } from 'src/app/model/medicalreport-model';
import { IMedicalReportservices } from 'src/app/services/ModuleInterfaces/IMedicalReport-services';

@Component({
  selector: 'app-recordmedicalreport',
  templateUrl: './recordmedicalreport.component.html',
  styleUrls: ['./recordmedicalreport.component.scss']
})
export class RecordmedicalreportComponent {
  medicalreportForm = new FormGroup({
    GivenBy: new FormControl('',[Validators.required]),
    Attachment: new FormControl('',[Validators.required]),
    Title: new FormControl('',[Validators.required]),
    Notes: new FormControl(''),
 
  }); 
  constructor(private MedicalReportservices: IMedicalReportservices,private router: Router) { }


  onSubmit() {   
    var model: IMedicalReportModel = {
      Title: this.medicalreportForm.value.Title ? this.medicalreportForm.value.Title : "",
      Notes: this.medicalreportForm.value.Notes ? this.medicalreportForm.value.Notes : "",
      Attachment: this.medicalreportForm.value.Attachment ? this.medicalreportForm.value.Attachment : "",
      GivenBy: this.medicalreportForm.value.GivenBy ? this.medicalreportForm.value.GivenBy : "",
    };  

    this.MedicalReportservices.medicalreport(model).subscribe((response: IMedicalReportResponse) => { 
      if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
        swal.fire({title:"Medical Report submitted",timer:3000, toast: true,position: 'top-right',showCancelButton: true,showConfirmButton: true});  
 
      }
      else
      {
        alert("error");
      } 
    }); 
  }

}
