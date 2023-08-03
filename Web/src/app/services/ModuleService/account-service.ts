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
    override forgetpassword(model: IUpdatePasswordRequestModel): Observable<any> {
        return this.baseService.postRequest(APIUrls.ForgetPassword,model);
    }

     constructor(private baseService: IBaseService) { 
        super();
     } 

    login(model: ILoginModel): Observable<any> { 
        return this.baseService.postRequest(APIUrls.GetTokenBasedOnLogin,model);
    } 

    register(model: IRegisterModel): Observable<any> { 
        return this.baseService.postRequest(APIUrls.RegisterUser,model);
    } 
}