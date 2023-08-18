import { Observable, expand } from 'rxjs' ;
import { ILoginModel } from '../../model/login-model';
import { Injectable } from "@angular/core";
import { IAccountService } from '../ModuleInterfaces/IAccount-service'; 
import { HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service';
import { IRecordMedicineService } from '../ModuleInterfaces/IRecordmedicine-service';
import { IRecordMedicineModel } from '../../model/recordmedicine-model';

@Injectable()
export class recordmedicineservice extends IRecordMedicineService {


     constructor(private baseService: IBaseService) { 
        super();
     } 
     addrecordmedicine(model: IRecordMedicineModel): Observable<any> {
        return this.baseService.postRequest(APIUrls.RecordMedicine,model);
    }
     getrecordmedicine(): Observable<any> {
        return this.baseService.getRequest(APIUrls.RecordMedicine);
    }
}