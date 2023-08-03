import { Component } from '@angular/core';
import { DropDownDto } from 'src/app/model/dropdown';
import { SystemMessages } from 'src/app/constants/messages'; 
import { ISecurityQaModel, SecurityQaModel } from 'src/app/model/security-qa'; 
import swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAccountService } from 'src/app/services/ModuleInterfaces/IAccount-service';
import { Router } from '@angular/router';
import { IUpdatePasswordRequestModel } from 'src/app/model/forgetpassword-model';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  isTostVisible: boolean =false;
  alertMessage: string =""; 
  selectedValue:string= SystemMessages.QuestionOne; 
  modelSecurityQas : ISecurityQaModel []=[];
  listOfQuestions : DropDownDto<string> []=[]
  forgetpasswordForm = new FormGroup({
    Email: new FormControl('',[Validators.email,Validators.required]), 
    SecurityAnswer: new FormControl('',[Validators.required]), 
    Password: new FormControl('',[Validators.required]),
    repeatPassword: new FormControl('',[Validators.required]),
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

    if(this.forgetpasswordForm.value.Password!=this.forgetpasswordForm.value.repeatPassword){  
      swal.fire("Password and ConfirmPassword Does not match!"); 
      return;
    }
    this.modelSecurityQas =[];
    this.modelSecurityQas.push(new SecurityQaModel(this.selectedValue??"",this.forgetpasswordForm.value.SecurityAnswer??"")); 

     var model: IUpdatePasswordRequestModel = {
       Email: this.forgetpasswordForm.value.Email ??"",
       SecurityQas: this.modelSecurityQas,
       SecurityAnswer: this.forgetpasswordForm.value.SecurityAnswer ??"",
       Password: this.forgetpasswordForm.value.Password ??"",
     };  
     
    this.accountService.forgetpassword(model).subscribe((response: any) => {  
      
       console.log(response.error,"response.error");
      if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
        swal.fire({title:"your password has been changed please login with new credential!",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false}); 
        localStorage.removeItem('token');
             this.router.navigate(["/login"]);
      }
       else
       { 
         swal.fire({title:"issue while forgetpassword!",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false});  
       } 
    });    
  }   

}
