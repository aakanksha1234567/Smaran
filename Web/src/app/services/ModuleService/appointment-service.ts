import { Observable, expand } from 'rxjs' ;
import { ILoginModel } from '../../model/login-model';
import { Injectable } from "@angular/core";
import { IAccountService } from '../ModuleInterfaces/IAccount-service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service'; 
import { IAppointmentService } from '../ModuleInterfaces/IAppointment-service';
import { IAppointmentModel } from '../../model/Appointment-model';

@Injectable()
export class AppointmentService extends IAppointmentService {
    
  
     constructor(private baseService: IBaseService,private http: HttpClient) { 
        super();
     } 

     
     AddRecord(model: IAppointmentModel,file : any): Observable<any>{
        let obj = {
          model : model,
          file : file
        }     
        let retVal = this.baseService.postRequest(APIUrls.Appointment,file); 
        return retVal;
    } 

    getAppointments(): Observable<any> { 
      let userId = (Number)(localStorage.getItem('userId')); 
      return this.baseService.getRequest(APIUrls.GetAppointments+userId);
  } 

  deleteAppointment(id:any): Observable<any> {  
    return this.baseService.deleteRequest(APIUrls.DeleteAppointments+id);
} 
 

getAppointmentById(id:any): Observable<any> {  
  return this.baseService.getRequest(APIUrls.GetAppointmentById+id);
} 


UpdateRecord(model: IAppointmentModel,file : any): Observable<any>{
  let obj = {
    model : model,
    file : file
  }     
  let retVal = this.baseService.putRequest(APIUrls.Appointment,file); 
  return retVal;
} 

}