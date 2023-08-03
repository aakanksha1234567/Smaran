import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { IAccountService } from "./ModuleInterfaces/IAccount-service";
import { IBaseService } from "./ModuleInterfaces/IBase-service";
import { AccountService } from "./ModuleService/account-service";
import { BaseService } from "./ModuleService/base-service";
import { RequestTokenInterceptor } from './TokenInterceptor/token-interceptor';
import { IAppointmentService } from "./ModuleInterfaces/IAppointment-service";
import { AppointmentService } from "./ModuleService/appointment-service"; 
import { FeedbackService } from "./ModuleService/feedback-service"; 
import { recordmedicineservice } from "./ModuleService/recordmedicine-service"; 
import { MeetingService} from './ModuleService/meeting-service';
import {pastachievementservice} from './ModuleService/PastAchievement-service';
import {NoteService} from './ModuleService/note-service';

import { IFeedbackservices } from "./ModuleInterfaces/IFeedback-services"; 
import { IRecordMedicineService } from "./ModuleInterfaces/IRecordmedicine-service";
import { IMeetingservices} from './ModuleInterfaces/IMeeting-services';
import {IPastAchievementService} from './ModuleInterfaces/IPastAchievement-service';
import {INoteservices} from './ModuleInterfaces/INote-services';



export const RegisterService = [
    { provide: IBaseService, useClass: BaseService },
    { provide: IAccountService, useClass:AccountService },
    { provide: IAppointmentService, useClass:AppointmentService },
    { provide: IFeedbackservices, useClass:FeedbackService },
    { provide: IRecordMedicineService, useClass:recordmedicineservice },
    { provide: IMeetingservices, useClass:MeetingService },
    { provide: IPastAchievementService, useClass:pastachievementservice },
    { provide: INoteservices, useClass:NoteService },
    


    { provide: HTTP_INTERCEPTORS, useClass: RequestTokenInterceptor, multi: true } 
  ];