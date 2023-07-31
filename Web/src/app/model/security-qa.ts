export class SecurityQaModel implements ISecurityQaModel
{
    SecurityQuestion : string = '';
    SecurityAnswer : string =''; 
    constructor(_SecurityQuestion:string,_SecurityAnswer:string){
        this.SecurityQuestion = _SecurityQuestion;
        this.SecurityAnswer = _SecurityAnswer;
    }
}

export interface ISecurityQaModel
{
    SecurityQuestion : string;
    SecurityAnswer : string; 
}