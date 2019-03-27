import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class AppServices{

  constructor(private http: HttpClient) { }

  getUserDetails(userId){
    return this.http.get('http://localhost:3000/searchUser/' +userId);
  }

}
