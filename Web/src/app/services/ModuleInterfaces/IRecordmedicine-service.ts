import { Observable } from 'rxjs';  
import { IRecordMedicineModel } from '../../model/recordmedicine-model';

export abstract class IRecordMedicineService{
  
    abstract addrecordmedicine(model: IRecordMedicineModel): Observable<any>; 
    abstract getrecordmedicine():Observable<any>;
}