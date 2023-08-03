import { Observable } from 'rxjs'  
import { ILoginModel } from '../../model/login-model' 
import { IRegisterModel } from 'src/app/model/register-model'

export abstract class IAccountService{
    abstract login(model: ILoginModel): Observable<any>; 
    abstract register(model: IRegisterModel): Observable<any>; 
    abstract getNotifications(): Observable<any>;  
}