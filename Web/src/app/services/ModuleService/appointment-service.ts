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
      //   let headers: HttpHeaders = new HttpHeaders(
      //     {
      //         //'Content-Type': 'application/x-www-form-urlencoded'
      //         'Content-Type': 'application/json'
      //     }); 
        //let retVal = this.baseService.postRequestWithHeader(APIUrls.Appointment,file,headers);
        let retVal = this.baseService.postRequest(APIUrls.Appointment,file);

      //   let localbaseUrl = "http://localhost:4200/assets/systemImages/";
      //  const upload$ = this.http.post(localbaseUrl, file);  
      //  upload$.subscribe();
        return retVal;
    } 
 
}