import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from './policy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://192.168.0.105";

  constructor(private httpClient: HttpClient) { }

  readPolicies(): Observable<Policy[]> {
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/backend/api/read.php`);
  }

  createPolicy(policy: Policy): Observable<Policy> {
    return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/backend/api/create.php`, policy);
  }


  updatePolicy(policy: Policy) {
    return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/backend/api/update.php`, policy);
  }

  deletePolicy(id: number) {
    return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}/backend/api/delete.php/?id=${id}`);
  }

}

