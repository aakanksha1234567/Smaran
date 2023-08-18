import { Observable, expand } from 'rxjs' ;
import { Injectable } from "@angular/core"; 
import { HttpHeaders } from '@angular/common/http';
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

     constructor(private baseService: IBaseService) { 
        super();
     } 

     override medicalreport(model: IMedicalReportModel): Observable<any> {
        return this.baseService.postRequest(APIUrls.MedicalReports,model);
    }

    override getMedicalreport(): Observable<any> {
        return this.baseService.getRequest(APIUrls.MedicalReports);
    }

}