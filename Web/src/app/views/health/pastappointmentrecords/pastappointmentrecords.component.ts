import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAppointmentResponse } from 'src/app/model/appointment-response'
import { IAppointmentService } from 'src/app/services/ModuleInterfaces/IAppointment-service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pastappointmentrecords',
  templateUrl: './pastappointmentrecords.component.html',
  styleUrls: ['./pastappointmentrecords.component.scss']
})
export class PastappointmentrecordsComponent implements OnInit {
  appointmentResponses: IAppointmentResponse[]=[];
  constructor(private _appointmentService:IAppointmentService,private router: Router){ 
  }
  ngOnInit(){   
    this.getRecords() 
  } 

  getRecords(){
    this._appointmentService.getAppointments().subscribe((response: IAppointmentResponse[]) => {
      this.appointmentResponses = response;
    });
  }

  onAddRecord(){
    this.router.navigate(["/health/recordappointment"]); 
  }

  onUpdate(ev:any){
    this.router.navigate(["/health/recordappointment"],{queryParams:{id:ev.id}}); 
  }
  onDelete(ev:any){ 
    console.log(ev,"appointmentResponses");
    swal.fire({
      title:"Are you sure want to delete this recod?.", showCancelButton: true,showConfirmButton: true,icon: "warning"}).then( (res:any)=>{ 
        if (res.value) {  
          this._appointmentService.deleteAppointment(ev.id).subscribe((response: any) => {    
           if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
              swal.fire("Deleted!","Your Record has been deleted","success")
              this.getRecords();
           }
            else
            { 
              swal.fire({title:"Issue while delete appointment ! Please check."});  
            } 
         });    
      }
      });
  }
} 
