import { Component, OnInit } from '@angular/core';  
import { IAccountService } from 'src/app/services/ModuleInterfaces/IAccount-service';
import { INotificationResponse } from 'src/app/model/notification-response';
import swal from 'sweetalert2';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  followupsCount:string ='';
  meetingsCount:string ='';
  notificationResponses: INotificationResponse[]=[];
 
  constructor(private _accountService: IAccountService){  
    
  }      


  ngOnInit(): void {    
    let resutOfmeetings = this._accountService.getNotifications().subscribe((response: INotificationResponse[]) => {
      this.notificationResponses = response;
          const resultfollowupsCount = response.filter((obj) => {
            return obj.typeOfMeeting === 1;
          });
          this.followupsCount = resultfollowupsCount.length.toString();

          const resultMeetingCount = response.filter((obj) => {
            return obj.typeOfMeeting === 2;
          });

          this.meetingsCount = resultMeetingCount.length.toString();

          
          const oneMinute =1000*60;
          const meetingMinute = 10;
          const appointmentMinute = 5; 

          setInterval(function () 
          { 
            // metting interval
            for (let index = 0; index < resultMeetingCount.length; index++) {
                const element = resultMeetingCount[index]; 
              
                const date1 = new Date(element.scheduleTime); 
         
                var date2 = new Date(); 
                date2.setMinutes(date2.getMinutes() + (meetingMinute-3));
                var date3 = new Date(); 
                date3.setMinutes(date3.getMinutes() + (meetingMinute+3));
              
                console.log("interval TIme1",date1)
                console.log("interval TIme2",date2)
                console.log("interval TIme2",date3)
                if(date1>=date2 && date1<=date3)
                {
                  console.log(element,"In Alert") 
                  swal.fire({title:element.description,timer:15000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "success"});    
                };
            }  
          }, (60000));   

          setInterval(function () 
          { 
            // metting interval
            for (let index = 0; index < resultfollowupsCount.length; index++) {
                const element = resultfollowupsCount[index]; 
              
                const date1 = new Date(element.scheduleTime); 
         
                var date2 = new Date(); 
                date2.setMinutes(date2.getMinutes() + (appointmentMinute-3));
                var date3 = new Date(); 
                date3.setMinutes(date3.getMinutes() + (appointmentMinute+3));
              
                console.log("interval TIme1",date1)
                console.log("interval TIme2",date2)
                console.log("interval TIme2",date3)
                if(date1>=date2 && date1<=date3)
                {
                  console.log(element,"In Alert") 
                  swal.fire({title:element.description,timer:15000, toast: true,position: 'top-right',showCancelButton: false,showConfirmButton: false,icon: "success"});    
                };
            }  
          }, (60000));    

      }); 


   

  }
 

  


}
