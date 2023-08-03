import { Observable } from 'rxjs' 
import { INoteModel } from '../../model/note-model'
export abstract class INoteservices{
    abstract note(model: INoteModel): Observable<any>; 

}