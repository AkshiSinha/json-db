import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {emp} from './employee.module';
import {emp} from './employee.module';
import { HttpHeaders ,HttpHeaderResponse} from '@angular/common/http';
import { JsonPipe } from '@angular/common';
// import {Observable} from "rxjs/Rx";

// import { Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url:string='http://localhost:9191/employees/';

  constructor(private  httpClient: HttpClient) { }

  enroll(user:emp)
  {
    console.log(user);
    console.log(user.firstName)
    
    return this.httpClient.post<emp>(this.url,user);
}
}

