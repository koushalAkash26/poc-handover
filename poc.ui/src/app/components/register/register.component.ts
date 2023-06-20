import { Component,OnInit } from '@angular/core';
import { User} from 'src/app/Models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  addEmployeeRequest: User={username:'',password:'',role:'Associates',teamname:''};
  constructor(private userService:UserService) {
  }
  ngOnInit(): void {
    let  prompt=<HTMLElement>document.querySelector('#prompt');
    let  close=<HTMLElement>document.querySelector('#close');
    close?.addEventListener('click', function handleClick(event) {
      prompt.style.display = "none";
    });
   

  }

  addUser(){

    let  prompt=<HTMLElement>document.querySelector('#prompt');
    let  promptmessage=<HTMLElement>document.querySelector('#message');

    this.userService.addUser(this.addEmployeeRequest).subscribe(
      { next:(employee)=>{
       prompt.style.display = "block";
       promptmessage.innerHTML="Successfully Created.";
       
      },

     error:(response)=>{
       prompt.style.display = "block";
       promptmessage.innerHTML=response.status +"error";
     }

   })

  }

}
