import { Observable } from 'rxjs' 
import { IMedicalReportModel } from '../../model/medicalreport-model'
export abstract class IMedicalReportservices{
    abstract medicalreport(model: IMedicalReportModel): Observable<any>; 

}