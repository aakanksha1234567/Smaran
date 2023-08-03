import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFeedbackModel } from 'src/app/model/Feedback-model';
import {IFeedbackResponse} from 'src/app/model/feedback-response';
import { IFeedbackservices } from 'src/app/services/ModuleInterfaces/IFeedback-services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedbackForm = new FormGroup({
    comments: new FormControl('',[Validators.required]),
    attachment: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email,Validators.required]), 
 
  }); 
  constructor(private feedbackservices: IFeedbackservices,private router: Router) { }


  onSubmit() {   
    var model: IFeedbackModel = {
      Comments: this.feedbackForm.value.comments ? this.feedbackForm.value.comments : "",
      Email: this.feedbackForm.value.email ? this.feedbackForm.value.email : "",
      Attachment: this.feedbackForm.value.attachment ? this.feedbackForm.value.attachment: ""
    };  

    this.feedbackservices.feedback(model).subscribe((response: IFeedbackResponse) => { 
      if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
        swal.fire({title:"Feedback submitted",timer:3000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false});  
 
      }
      else
      {
        alert("feedback error");
      } 
    }); 
  }
}
