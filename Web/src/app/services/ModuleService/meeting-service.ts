import { Observable, expand } from 'rxjs' ;
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service';
import { IMeetingservices } from '../ModuleInterfaces/IMeeting-services';
import { IMeetingModel } from '../../model/meeting';




@Injectable()
export class MeetingService extends IMeetingservices {
   

     constructor(private baseService: IBaseService,private http: HttpClient) { 
        super();
     } 
     meeting(model: IMeetingModel,file : any): Observable<any>{
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
          let retVal = this.baseService.postRequest(APIUrls.RecordMeetings,file);
  
        //   let localbaseUrl = "http://localhost:4200/assets/systemImages/";
        //  const upload$ = this.http.post(localbaseUrl, file);  
        //  upload$.subscribe();
          return retVal;
        
    
    }
  

}