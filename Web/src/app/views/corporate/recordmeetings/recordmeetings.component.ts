import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMeetingModel } from 'src/app/model/meeting';
import { IMeetingservices } from 'src/app/services/ModuleInterfaces/IMeeting-services';
import swal from 'sweetalert2';
import {IMeetingResponse} from 'src/app/model/meeting-response';

@Component({
  selector: 'app-recordmeetings',
  templateUrl: './recordmeetings.component.html',
  styleUrls: ['./recordmeetings.component.scss']
})
export class RecordmeetingsComponent {
  meetingForm = new FormGroup({
    MeetingWith: new FormControl('',[Validators.required]),
    MeetingTime: new FormControl('',[Validators.required]),
    MeetingPlace:new FormControl('',[Validators.required]),
    Notes :new FormControl('',[Validators.required]),
    Link : new FormControl('',[Validators.required]),
    Attachment : new FormControl('',[Validators.required]),
});

constructor(private MeetingService: IMeetingservices,private router: Router) { }
onSubmit() {   
  var model: IMeetingModel = {
    MeetingWith: this.meetingForm.value.MeetingWith ? this.meetingForm.value.MeetingWith : "",
    MeetingTime: this.meetingForm.value.MeetingTime ? this.meetingForm.value.MeetingTime : "",
    MeetingPlace: this.meetingForm.value.MeetingPlace ? this.meetingForm.value.MeetingPlace : "",
    Notes: this.meetingForm.value.MeetingPlace ? this.meetingForm.value.MeetingPlace : "",
    Attachment: this.meetingForm.value.Attachment ? this.meetingForm.value.Attachment : "",
    Link: this.meetingForm.value.Link ? this.meetingForm.value.Link : "",
  };  

  this.MeetingService.meeting(model).subscribe((response: IMeetingResponse) => { 
    if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
      swal.fire({title:"Meeting Recorded",timer:3000, toast: true,position: 'top-right',showCancelButton: true,showConfirmButton: true});  

    }
    else
    {
      alert("meeting error");
    } 
  }); 
}
}
