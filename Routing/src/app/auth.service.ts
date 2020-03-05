import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static TOKEN_URL = "https://accounts.spotify.com/api/token";
  static user_pass_base64 = "NjcwYmRiNWVkMjQ0NDIxZmI2MDc4OWE5ZTllMzJlMGQ6NDZiZDVlNTQ2NjQwNDRhMGFjNDIyMWIxMWZmMmJlNzQ=";
  
  public token: string;

  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token');
  }

  login() {
    let authorization = `Basic ${AuthService.user_pass_base64}`;
    console.log("authorization:", authorization);
    let body = new HttpParams()
      .set('grant_type', 'client_credentials')
    let headers = new HttpHeaders(
      {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": authorization
      });
    let options = {
      headers: headers
    }
    this.http.post(AuthService.TOKEN_URL, body, options).subscribe((data:any) =>{
      let token = data.access_token;
      localStorage.setItem('token', token);
    });
  }

}
