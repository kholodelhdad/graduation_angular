import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  insertdate(data: any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/register',data);
  }
  login(loginFormValue:any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/login',loginFormValue);
  }
}

