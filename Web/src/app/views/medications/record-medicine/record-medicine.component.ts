import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRecordMedicineService } from 'src/app/services/ModuleInterfaces/IRecordmedicine-service';
import { IRecordMedicineModel } from 'src/app/model/recordmedicine-model';
import { DropDownDto } from 'src/app/model/dropdown';
import swal from 'sweetalert2';
import { SystemMessages } from 'src/app/constants/messages';

@Component({
  selector: 'app-record-medicine',
  templateUrl: './record-medicine.component.html',
  styleUrls: ['./record-medicine.component.scss']
})
export class RecordMedicineComponent { 
  recordMedicineForm = new FormGroup({
    MedicineName: new FormControl('',[Validators.required]),
    MedicineMg: new FormControl('',[Validators.required]),
    MedicineDose:new FormControl('',[Validators.required]),
    MedicineDuration: new FormControl('',[Validators.required]),
    MedicineReaction: new FormControl('',[Validators.required]),
})
constructor(private recordmedicineservice: IRecordMedicineService,private router: Router) {
 }

onSubmit() {  let userId = (Number)(localStorage.getItem('userId')); 
  var model: IRecordMedicineModel = {
    UserId: userId,
    MedicineName: this.recordMedicineForm.value.MedicineName ? this.recordMedicineForm.value.MedicineName : "",
    MedicineDose: this.recordMedicineForm.value.MedicineDose ? this.recordMedicineForm.value.MedicineDose : "",
    MedicineDuration: 0,
    MedicineReaction: this.recordMedicineForm.value.MedicineReaction ? this.recordMedicineForm.value.MedicineReaction : "",
    MedicineMg: 0
  };  

  this.recordmedicineservice.addrecordmedicine(model).subscribe((response: any) => { 
    if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
      swal.fire({title:"Medicine submitted",timer:3000, toast: true,position: 'top-right',showCancelButton: true,showConfirmButton: true});  

    }
    else
    {
      alert("medicine input error");
    } 
  }); 
}
}
