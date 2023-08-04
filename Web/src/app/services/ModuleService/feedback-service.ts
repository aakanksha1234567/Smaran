import { Observable, expand } from 'rxjs' ;
import { Injectable } from "@angular/core"; 
import { HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service';
import { IFeedbackservices } from '../ModuleInterfaces/IFeedback-services';
import { IFeedbackModel } from 'src/app/model/Feedback-model';



@Injectable()
export class FeedbackService extends IFeedbackservices {

     constructor(private baseService: IBaseService) { 
        super();
     } 

    feedback(model: IFeedbackModel,formData : any): Observable<any> {  
        
        return this.baseService.postRequest(APIUrls.Feedback,formData);
    } 
}