import { Observable, expand } from 'rxjs' ;
import { ILoginModel } from '../../model/login-model';
import { Injectable } from "@angular/core";
import { IAccountService } from '../ModuleInterfaces/IAccount-service'; 
import { HttpHeaders } from '@angular/common/http';
import { APIUrls } from '../../constants/api-urls';
import { IBaseService } from '../ModuleInterfaces/IBase-service';
import { IRegisterModel } from 'src/app/model/register-model';
import { IUpdatePasswordRequestModel } from 'src/app/model/forgetpassword-model';

@Injectable()
export class AccountService extends IAccountService {
    

     constructor(private baseService: IBaseService) { 
        super();
     } 

    login(model: ILoginModel): Observable<any> { 
        return this.baseService.postRequest(APIUrls.GetTokenBasedOnLogin,model);
    } 

    register(model: IRegisterModel): Observable<any> { 
        return this.baseService.postRequest(APIUrls.RegisterUser,model);
    } 

    getNotifications(): Observable<any> { 
        let userId = (Number)(localStorage.getItem('userId')); 
        return this.baseService.getRequest(APIUrls.GetNotification+userId);
    } 

    forgetpassword(model: IUpdatePasswordRequestModel) {  
        return this.baseService.putRequest<Observable<any>>(APIUrls.ForgetPassword+model.Email,model); 
    }
}