import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPastAchievementModel } from 'src/app/model/PastAchievement-model';
import { IPastAchievementService } from 'src/app/services/ModuleInterfaces/IPastAchievement-service';
import {IAchievementsResponse} from 'src/app/model/achievements-response';
import swal from 'sweetalert2';

@Component({
  selector: 'app-recordachievements',
  templateUrl: './recordachievements.component.html',
  styleUrls: ['./recordachievements.component.scss']
})
export class RecordachievementsComponent {
  recordAchievementForm = new FormGroup({
    GivenBy: new FormControl('',[Validators.required]),
    Title: new FormControl('',[Validators.required]),
    Comment:new FormControl('',[Validators.required]),
    Attachment: new FormControl('',[Validators.required]),

})
constructor(private pastachievementservice: IPastAchievementService,private router: Router) {
 }

onSubmit() {   
  let userId = (Number)(localStorage.getItem('userId'));
  var model: IPastAchievementModel = {
    UserId: userId,
    GivenBy: this.recordAchievementForm.value.GivenBy ? this.recordAchievementForm.value.GivenBy : "",
    Title: this.recordAchievementForm.value.Title ? this.recordAchievementForm.value.Title : "",
    Comment: this.recordAchievementForm.value.Comment ? this.recordAchievementForm.value.Comment : "",
    Attachment: this.recordAchievementForm.value.Attachment ? this.recordAchievementForm.value.Attachment : "",
  };  

  this.pastachievementservice.addpastachievement(model).subscribe((response: IAchievementsResponse) => { 
    if (response.error == null || response.error == "" || response.error == null || response.error == undefined) { 
      swal.fire({title:"Achievement Recorded",timer:3000, toast: true,position: 'top-right',showCancelButton: true,showConfirmButton: true});  

    }
    else
    {
      alert(" input error");
    } 
  }); 
}

}
