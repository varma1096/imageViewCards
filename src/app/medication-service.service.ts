import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  User } from './user.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MedicationServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 

    this.usersUrl = 'http://localhost:8080';
  }


  public findAll(): Observable<User[]> {
    console.log("in service..");
    return this.http.get<User[]>(this.usersUrl+'/getUsers');
  }

  
}
