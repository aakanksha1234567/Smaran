import { Observable } from 'rxjs'   
import { IAppointmentModel } from '../../model/Appointment-model';

export abstract class IAppointmentService{
    abstract AddRecord(model: IAppointmentModel,file: any): Observable<any>; 
    abstract getAppointments(): Observable<any>;  
    abstract deleteAppointment(id:any): Observable<any>;  
}