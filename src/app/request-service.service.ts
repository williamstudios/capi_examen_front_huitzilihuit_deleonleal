import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer 123456',
    'Content-Type': 'application/json',
    'Origin': 'http://localhost:4200' 
  })
};
@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private readonly http: HttpClient) { 
    
  }
  
  getAll(){
    return this.http.get('http://127.0.0.1:8000/users');
  }


}
