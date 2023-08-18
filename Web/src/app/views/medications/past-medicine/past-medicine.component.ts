import { Component } from '@angular/core';
import { IRecordMedicineService } from 'src/app/services/ModuleInterfaces/IRecordmedicine-service';

@Component({
  selector: 'app-past-medicine',
  templateUrl: './past-medicine.component.html',
  styleUrls: ['./past-medicine.component.scss']
})
export class PastMedicineComponent {
medicinerecordResponses : any
constructor (private recordmedicineservice : IRecordMedicineService){

}
ngOnInit() {

  this.recordmedicineservice.getrecordmedicine().subscribe((response: any) => {
    
    this.medicinerecordResponses = response;
    
    console.log(response)
})
  

}

}

