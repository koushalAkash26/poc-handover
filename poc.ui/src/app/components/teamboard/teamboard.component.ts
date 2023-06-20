import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { teamboardData } from 'src/app/Models/teamboardData.mode';

@Component({
  selector: 'app-teamboard',
  templateUrl: './teamboard.component.html',
  styleUrls: ['./teamboard.component.css']
})
export class TeamboardComponent {
  datas:teamboardData[]=[];
  tokenHeaderContainer: String='';
  constructor(private route: ActivatedRoute,private userService:UserService) {}

  

  ngOnInit(): void {
   
    
    this.userService.fetchteamboardData().subscribe(
      { next:(datasfetched)=>{
        this.datas=datasfetched
        console.log(this.datas)
        this.tokenHeaderContainer=this.userService.tokenHeader
      },

     error:(response)=>{
      console.log(response)
     }

   })

  }

}
