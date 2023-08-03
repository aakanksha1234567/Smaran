import { Observable, expand } from 'rxjs' ;
import { ILoginModel } from '../../model/login-model';
import { Injectable } from "@angular/core";
import { IAccountService } from '../ModuleInterfaces/IAccount-service'; 
import { HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service';
import { IRecordMedicineService } from '../ModuleInterfaces/IRecordmedicine-service';
import { IRecordMedicineModel } from '../../model/recordmedicine-model';
import { IPastAchievementService } from '../ModuleInterfaces/IPastAchievement-service';
import { IPastAchievementModel } from '../../model/PastAchievement-model';

@Injectable()
export class pastachievementservice extends IPastAchievementService{
    addpastachievement(model: IPastAchievementModel): Observable<any> {
        return this.baseService.postRequest(APIUrls.Achievements,model);
    }
     constructor(private baseService: IBaseService) { 
        super();
     } 
}