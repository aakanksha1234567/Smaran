import { ISecurityQaModel } from "./security-qa";
export interface IUpdatePasswordRequestModel {
    Email : string;
    SecurityQas : ISecurityQaModel [];
    SecurityAnswer : string;
    Password : string; 
}