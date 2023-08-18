import { Component } from '@angular/core';
import { IMedicalReportservices } from 'src/app/services/ModuleInterfaces/IMedicalReport-services';

@Component({
  selector: 'app-pastmedicalrecords',
  templateUrl: './pastmedicalrecords.component.html',
  styleUrls: ['./pastmedicalrecords.component.scss']
})
export class PastmedicalrecordsComponent {
  medicalrecordResponses : any
  
  constructor (private medicalreportservice : IMedicalReportservices){

  }

  ngOnInit() {

    this.medicalreportservice.getMedicalreport().subscribe((response: any) => {
      
      this.medicalrecordResponses = response;
      
      console.log(response)
  })
    

  }

}
