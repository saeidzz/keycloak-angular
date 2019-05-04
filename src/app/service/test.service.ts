import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

let httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
  }


  getPermissions(token: string) {
    return this.http.post('/server/api/getPermissions' , token, httpOptions);
  }

}
