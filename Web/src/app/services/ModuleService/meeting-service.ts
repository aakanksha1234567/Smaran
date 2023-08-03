import { Observable, expand } from 'rxjs' ;
import { Injectable } from "@angular/core"; 
import { HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service';
import { IMeetingservices } from '../ModuleInterfaces/IMeeting-services';
import { IMeetingModel } from '../../model/meeting';




@Injectable()
export class MeetingService extends IMeetingservices {
    meeting(model: IMeetingModel): Observable<any> {
        return this.baseService.postRequest(APIUrls.Meetings,model);
    }

     constructor(private baseService: IBaseService) { 
        super();
     } 

}