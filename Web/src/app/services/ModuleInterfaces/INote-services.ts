import { Observable } from 'rxjs' 
import { INoteModel } from '../../model/note-model'
export abstract class INoteservices{
    abstract note(model: INoteModel,file:any): Observable<any>; 
abstract getNote(): Observable<any>;
}