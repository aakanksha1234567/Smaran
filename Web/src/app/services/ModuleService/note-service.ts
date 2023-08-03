import { Observable, expand } from 'rxjs' ;
import { Injectable } from "@angular/core"; 
import { HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service';
import { IFeedbackservices } from '../ModuleInterfaces/IFeedback-services';
import { IFeedbackModel } from 'src/app/model/Feedback-model';
import { INoteservices } from '../ModuleInterfaces/INote-services';
import { INoteModel } from 'src/app/model/note-model';



@Injectable()
export class NoteService extends INoteservices {

     constructor(private baseService: IBaseService) { 
        super();
     } 

    note(model: INoteModel): Observable<any> {  
        return this.baseService.postRequest(APIUrls.Notes,model);
    } 
}