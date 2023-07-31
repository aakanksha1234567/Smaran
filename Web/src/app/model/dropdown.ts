export class DropDownDto<T> implements DropDownDto<T>
{ 
    Value: T;
    Name : string=''; 
    constructor(_Value:T,_Name:string){
        this.Value = _Value;
        this.Name = _Name;
    }
}

export interface DropDownDto<T>
{
    Value : T;
    Name : string; 
}