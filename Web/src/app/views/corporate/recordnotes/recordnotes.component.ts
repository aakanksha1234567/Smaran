import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INoteModel } from 'src/app/model/note-model';
import { INoteservices } from 'src/app/services/ModuleInterfaces/INote-services';
import {INoteResponse} from 'src/app/model/note-response';
import swal from 'sweetalert2';

@Component({
  selector: 'app-recordnotes',
  templateUrl: './recordnotes.component.html',
  styleUrls: ['./recordnotes.component.scss']
})
export class RecordnotesComponent {
  noteForm = new FormGroup({
    Subject: new FormControl('',[Validators.required]),
    Attachment: new FormControl('',[Validators.required]),
    Title: new FormControl('',[Validators.required]),
    Notes: new FormControl('',[Validators.required]),
 
  }); 
  constructor(private NoteService: INoteservices,private router: Router) { }


  onSubmit() {   
    var model: INoteModel = {
      Subject: this.noteForm.value.Subject ? this.noteForm.value.Subject : "",
      Title: this.noteForm.value.Title ? this.noteForm.value.Title : "",
      Notes: this.noteForm.value.Notes ? this.noteForm.value.Notes: "",
      Attachment: this.noteForm.value.Attachment ? this.noteForm.value.Attachment : "",
    };  

    this.NoteService.note(model).subscribe((response: INoteResponse) => { 
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
