import { Observable } from 'rxjs' 
import { IMedicalReportModel } from '../../model/medicalreport-model'
export abstract class IMedicalReportservices{
    abstract medicalreport(model: IMedicalReportModel,file:any): Observable<any>; //post method
    abstract getMedicalreport(): Observable<any>; //get method


}