import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup ,FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginModel } from 'src/app/model/login-model';
import { ILoginResponse } from 'src/app/model/login-response';
import { IAccountService } from 'src/app/services/ModuleInterfaces/IAccount-service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  submitActive:any =false;
  loginTitle:any="Login";
  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required]),

  });
  
  
  constructor(private accountService: IAccountService,private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(["/dashboard"]);
    }
  }

  onSubmit(){   
    var model: ILoginModel = { 
      Username: this.loginForm.value.userName ? this.loginForm.value.userName : "",
      Password: this.loginForm.value.password ? this.loginForm.value.password : ""
    };  

    this.accountService.login(model).subscribe((response: ILoginResponse) => { 
      if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
        swal.fire({title:"WelCome To System ! Login Successful.",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false});  

            localStorage.setItem('token', response.accessToken);
            localStorage.setItem('userId', response.responseData); 
            this.router.navigate(["/dashboard"]);
      }
      else
      {
        alert("login error");
      } 
    }); 
  }

  forgetUser(){
    console.log(48); 
  }

}
