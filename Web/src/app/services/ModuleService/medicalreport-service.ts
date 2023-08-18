import { Observable, expand } from 'rxjs' ;
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service';
import { IFeedbackservices } from '../ModuleInterfaces/IFeedback-services';
import { IFeedbackModel } from 'src/app/model/Feedback-model';
import { INoteservices } from '../ModuleInterfaces/INote-services';
import { INoteModel } from 'src/app/model/note-model';
import {IMedicalReportModel} from 'src/app/model/medicalreport-model';
import { IMedicalReportservices } from '../ModuleInterfaces/IMedicalReport-services';


@Injectable()
export class MedicalReportservices extends IMedicalReportservices {

     constructor(private baseService: IBaseService,private http: HttpClient) { 
        super();
     } 

     medicalreport(model: IMedicalReportModel,file:any): Observable<any> {
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
          let retVal = this.baseService.postRequest(APIUrls.MedicalReports,file);
  
        //   let localbaseUrl = "http://localhost:4200/assets/systemImages/";
        //  const upload$ = this.http.post(localbaseUrl, file);  
        //  upload$.subscribe();
          return retVal;
    }

     getMedicalreport(): Observable<any> {
        return this.baseService.getRequest(APIUrls.MedicalReports);
    }

}