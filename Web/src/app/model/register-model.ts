import { ISecurityQaModel } from "./security-qa";

export interface IRegisterModel {
    FirstName : string;
    LastName : string;
    Phone : string; 
    Email : string; 
    Password : string; 
    IsSelf : boolean;  
    SecurityQas : ISecurityQaModel [];
}