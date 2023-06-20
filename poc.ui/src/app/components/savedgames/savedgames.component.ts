
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { GameData } from 'src/app/Models/gameData.model';

@Component({
  selector: 'app-savedgames',
  templateUrl: './savedgames.component.html',
  styleUrls: ['./savedgames.component.css']
})
export class SavedgamesComponent {
  datas:GameData[]=[];
  tokenHeaderContainer: String='';
  constructor(private route: ActivatedRoute,private userService:UserService) {}



  ngOnInit(): void {
   
    
    this.userService.fetchGameData().subscribe(
      { next:(datasfetched)=>{
        this.datas=datasfetched;
        this.tokenHeaderContainer=this.userService.tokenHeader;
        
      },

     error:(response)=>{
      console.log(response);
     }

   })

  }

}
