import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { IAccountService } from "./ModuleInterfaces/IAccount-service";
import { IBaseService } from "./ModuleInterfaces/IBase-service";
import { AccountService } from "./ModuleService/account-service";
import { BaseService } from "./ModuleService/base-service";
import { RequestTokenInterceptor } from './TokenInterceptor/token-interceptor';
import { IAppointmentService } from "./ModuleInterfaces/IAppointment-service";
import { AppointmentService } from "./ModuleService/appointment-service";

export const RegisterService = [
    { provide: IBaseService, useClass: BaseService },
    { provide: IAccountService, useClass:AccountService },
    { provide: IAppointmentService, useClass:AppointmentService },

    { provide: HTTP_INTERCEPTORS, useClass: RequestTokenInterceptor, multi: true } 
  ];