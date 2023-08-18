import { Observable, expand } from 'rxjs' ;
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service';
import { IFeedbackservices } from '../ModuleInterfaces/IFeedback-services';
import { IFeedbackModel } from 'src/app/model/Feedback-model';



@Injectable()
export class FeedbackService extends IFeedbackservices {

     constructor(private baseService: IBaseService,private http: HttpClient) { 
        super();
     } 

    feedback(model: IFeedbackModel,file : any): Observable<any> {  
        
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
          let retVal = this.baseService.postRequest(APIUrls.Feedback,file);
  
        //   let localbaseUrl = "http://localhost:4200/assets/systemImages/";
        //  const upload$ = this.http.post(localbaseUrl, file);  
        //  upload$.subscribe();
          return retVal;
      } 

       
}