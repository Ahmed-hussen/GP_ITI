import { User } from './../_models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs';
import { Users } from '_models/users';

@Injectable({
  providedIn: 'root'
})

export class AuthServicesService {

  constructor(private http: HttpClient) { }
  baseURL = environment.ApiUrl + 'Auth/';
  url = environment.ApiUrl +'api/Users/';
 
 

  jwtHelper = new JwtHelperService();// علشان يعرف هل التوكين ده صح ولا لا
  decodedToken: any; // لفك تشفير التوكين علشان اخد المعلومات الخاصه باليوزر
  currentUser: User;
   tll:string;

  login(model: any){
    return this.http.post(this.baseURL + 'login', model).pipe( // use pip becouse api return values(token,user)
      map((response: any) => {
        const user = response;//all data from Api
        if (user) {
          //و هنا باخد الحجات اللي جايه من الدوت نت واعملها حفظ ف اللوكال استوريدج
          localStorage.setItem('token', user.token);  // save token from api in localStorage
          localStorage.setItem('user', JSON.stringify(user.user)) // save user info from api in localStorage
          // لفك تشفير التوكين علشان اخد المعلومات الخاصه باليوزر
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          // save user info from api in variable
          //this.currentUser = user.user;
          this.currentUser = user.user;
        }
      }))
  }
  
  loggedIn() {
    try {
      const token = localStorage.getItem('token');
     this.tll =token;
   
      return !this.jwtHelper.isTokenExpired(token);
    }
    catch {
      return false;
    }
  }

  roleMatch(AllowedRoles: Array<string>): boolean {
    let isMatch = false;
    const userRoles = this.decodedToken.role as Array<string>;
    AllowedRoles.forEach(element => {
      if (userRoles.includes(element)) {
        isMatch = true;
        return;
      }
    });
    return isMatch;
  }

  register(user: User) {
    alert(user);
    return this.http.post(this.baseURL + 'register', user);
  }
  nns:Users;
  edite(st:Users)
  
  { //console.log(st);
   
    //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
   // console.log(this.currentUser?.userName)
  
    //console.log(this.decodedToken.nameid);  
   
    
    //console.log(this.tll);//token string
       // this.currentUser.userName=st.userName;
       // this.currentUser.email=st.Email;
       
       // console.log(this.currentUser?.userName)
       // console.log(st);
      // alert(st.userName);
       //st.id=this.decodedToken.nameid;//to take id of this token
       console.log(st.id);//
       console.log(st.Password);//
      
       //return this.http.put(this.url,st);
       //return this.http.post<Users>(this.url,st);
       ///////////////////////////////////////////////////////
       return this.http.post(this.url + 'updateUserData', st);

       //مش بيعمل authorization
       

      
      
       
        
        
        

    
    
      
    }



}

