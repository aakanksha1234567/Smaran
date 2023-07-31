import { Observable, expand } from 'rxjs' ;
import { ILoginModel } from '../../model/login-model';
import { Injectable } from "@angular/core";
import { IAccountService } from '../ModuleInterfaces/IAccount-service'; 
import { HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service'; 
import { IAppointmentService } from '../ModuleInterfaces/IAppointment-service';
import { IAppointmentModel } from '../../model/Appointment-model';

@Injectable()
export class AppointmentService extends IAppointmentService {

     constructor(private baseService: IBaseService) { 
        super();
     } 

     AddRecord(model: IAppointmentModel): Observable<any>{ 
        return this.baseService.postRequest(APIUrls.Appointment,model);
    } 
 
}