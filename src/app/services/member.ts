import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Member {
  /**
   *
   */
  constructor(private httpClient: HttpClient) {
    
  }

  onLogin(obj: any){
    return this.httpClient.post('https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login', obj)
  }
}
