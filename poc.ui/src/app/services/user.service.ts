import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

import { AUser } from '../Models/Auser.model';
import { User } from '../Models/user.model';
import { GameData } from '../Models/gameData.model';
import { teamboardData } from '../Models/teamboardData.mode';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseApiUrl: string = environment.baseApiUrl;
  tokenHeader: String='';
  validUser: String='';

  constructor(private http:HttpClient) { }

 addUser(addEmployeeRequest:User):Observable<User>{


   return this.http.post<User>(this.baseApiUrl + '/api/Users',addEmployeeRequest);

 }
 verify(loginRequest:AUser):Observable<String>{

  
  this.validUser=loginRequest.username;
  

  return this.http.get(this.baseApiUrl + '/api/Users/login?uname='+loginRequest.username+"&pwd="+loginRequest.password,{responseType:'text'});

}
fetchGameData():Observable<GameData[]>{
  let head_obj=new HttpHeaders().set("Authorization","bearer "+this.tokenHeader)
  return this.http.get<GameData[]>(this.baseApiUrl + '/api/Users/gamedata',{headers:head_obj});
}
fetchteamboardData():Observable<teamboardData[]>{
  let head_obj=new HttpHeaders().set("Authorization","bearer "+this.tokenHeader)
  return this.http.get<teamboardData[]>(this.baseApiUrl + '/api/Users/teamboarddata',{headers:head_obj});
}
}
