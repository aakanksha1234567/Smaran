import { ISecurityQaModel } from "./security-qa";
export interface IUpdatePasswordRequestModel {
    Email : string;
    SecurityQuestion : string;
    SecurityAnswer : string;
    Password : string; 
}