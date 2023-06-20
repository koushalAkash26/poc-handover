import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  welcomeUser:String|null='';
  
  constructor(private userService:UserService) {}

  

  ngOnInit(): void {
   
    
    this.welcomeUser=this.userService.validUser
 

  }

}
