import { Component,OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AUser} from 'src/app/Models/Auser.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: AUser={username:'',password:''};
  currentRoute:String='';
  
  
 
  constructor(private userService:UserService,private router:Router) {

    
  }

  ngOnInit(): void {
    let  prompt=<HTMLElement>document.querySelector('#prompt');
    let  close=<HTMLElement>document.querySelector('#close');
    close?.addEventListener('click', function handleClick(event) {
      prompt.style.display = "none";
    });
  }
  verify(){
        let  prompt=<HTMLElement>document.querySelector('#prompt');
        let  promptmessage=<HTMLElement>document.querySelector('#message');
    this.userService.verify(this.loginRequest).subscribe(
      { next:(loginuser)=>{
        
       
        if(loginuser=="not found."){
          
          prompt.style.display = "block";
          promptmessage.innerHTML="not found.";
          
        }
        else if(loginuser=="Wrong Password"){
          
          prompt.style.display = "block";
          promptmessage.innerHTML="wrong password.";
          
        }
        else{
          this.userService.tokenHeader=loginuser;
          this.router.navigateByUrl('/home');
        }
        
        
      },

     error:(response)=>{
       console.log(response);
     }

   })

  }

}
