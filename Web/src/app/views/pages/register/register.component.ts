import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterModel } from 'src/app/model/register-model';
import { ISecurityQaModel, SecurityQaModel } from 'src/app/model/security-qa'; 
import { IAccountService } from 'src/app/services/ModuleInterfaces/IAccount-service';
import { SystemMessages } from 'src/app/constants/messages'; 
import swal from 'sweetalert2';
import { DropDownDto } from 'src/app/model/dropdown';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isTostVisible: boolean =false;
  alertMessage: string =""; 
  selectedValue:string= SystemMessages.QuestionOne; 
  modelSecurityQas : ISecurityQaModel []=[];
  listOfQuestions : DropDownDto<string> []=[]
  registerForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    pohoneNumber: new FormControl('',[Validators.pattern('^[1-9][0-9]+$'),Validators.required,Validators.minLength(10),Validators.maxLength(11)]),
    email: new FormControl('',[Validators.email,Validators.required]), 
    answerOne: new FormControl('',[Validators.required]), 
    password: new FormControl('',[Validators.required]),
    repeatPassword: new FormControl('',[Validators.required]),
    registerFor: new FormControl('1',[Validators.required]), 
  }); 

  constructor(private accountService: IAccountService,private router: Router) {   
    this.listOfQuestions = [
      {
        Name:  SystemMessages.QuestionOne,
        Value:  SystemMessages.QuestionOne
      },
      {
        Name:  SystemMessages.QuestionTwo,
        Value: SystemMessages.QuestionTwo
      },
      {
        Name:  SystemMessages.QuestionThree,
        Value: SystemMessages.QuestionThree
      }]; 
  } 

  changeFn(e:any){
    this.selectedValue=e.target.value;
  }
  onSubmit(){    

    if(this.registerForm.value.password!=this.registerForm.value.repeatPassword){  
      swal.fire("Password and ConfirmPassword Does not match!"); 
      return;
    }
    this.modelSecurityQas =[];
    this.modelSecurityQas.push(new SecurityQaModel(this.selectedValue??"",this.registerForm.value.answerOne??"")); 

    var model: IRegisterModel = { 
      FirstName : this.registerForm.value.firstName ?? "",
      LastName  : this.registerForm.value.lastName ?? "",
      IsSelf    : this.registerForm.value.registerFor?true: false,
      Phone     : this.registerForm.value.pohoneNumber ??"",
      Email     : this.registerForm.value.email ?? "",
      Password  : this.registerForm.value.password ?? "",
      SecurityQas : this.modelSecurityQas
    };  
     
    this.accountService.register(model).subscribe((response: any) => {  
      
      console.log(response.error,"response.error");
      if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
        swal.fire({title:"your account is created please login with new credential!",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false}); 
        localStorage.removeItem('token');
        localStorage.removeItem('userId'); 
            this.router.navigate(["/login"]);
      }
      else if(response.error==SystemMessages.UserExistsCode)
      {   
        swal.fire({title:"user with this email already exists!",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false}); 
      } 
      else
      { 
        swal.fire({title:"issue while register!",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false});  
      } 
    });    
  }   
}