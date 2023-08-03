import { Observable } from 'rxjs' 
import { IMeetingModel } from '../../model/meeting';
export abstract class IMeetingservices{
    abstract meeting(model: IMeetingModel): Observable<any>; 

}