import { Observable, expand } from 'rxjs' ;
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service';
import { IFeedbackservices } from '../ModuleInterfaces/IFeedback-services';
import { IFeedbackModel } from 'src/app/model/Feedback-model';
import { INoteservices } from '../ModuleInterfaces/INote-services';
import { INoteModel } from 'src/app/model/note-model';



@Injectable()
export class NoteService extends INoteservices {

     constructor(private baseService: IBaseService,private http: HttpClient) { 
        super();
     } 

    note(model: INoteModel,file:any): Observable<any> {  
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
          let retVal = this.baseService.postRequest(APIUrls.Notes,file);
  
        //   let localbaseUrl = "http://localhost:4200/assets/systemImages/";
        //  const upload$ = this.http.post(localbaseUrl, file);  
        //  upload$.subscribe();
          return retVal; 
    } 
    getNote(): Observable<any> {
      return this.baseService.getRequest(APIUrls.Notes);
  }
}