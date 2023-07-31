import { Observable } from 'rxjs'   
import { IAppointmentModel } from '../../model/Appointment-model';

export abstract class IAppointmentService{
    abstract AddRecord(model: IAppointmentModel): Observable<any>;
}