import { Component } from '@angular/core';
import { INoteservices } from 'src/app/services/ModuleInterfaces/INote-services';

@Component({
  selector: 'app-pastnotes',
  templateUrl: './pastnotes.component.html',
  styleUrls: ['./pastnotes.component.scss']
})
export class PastnotesComponent {

  notesrecordResponses : any

  constructor(private NoteService : INoteservices ){

  }
  ngOnInit() {

    this.NoteService.getNote().subscribe((response: any) => {
      
      this.notesrecordResponses = response;
      
      console.log(response)
  })
    

  }
}
