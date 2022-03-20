import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


// export class User {
//   _id: number;
//   name: string;
//   email: string;
//   username: string;
// }


@Injectable({
  providedIn: 'root'
})
export class TenantsService {

  endpoint = 'http://127.0.0.1:8000/api/tenant/GetTenantList';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getTenantList(): Observable<any> {
   return this.http.post(this.endpoint, this.httpOptions);
     
  }


}
