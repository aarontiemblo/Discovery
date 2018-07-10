import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarcasService {
  
  constructor(private http: HttpClient) { }

  getMarcas(): Observable<object> {
      const headers = new Headers();
//      headers.append('api_key', '8b2f69b4-2de7-473d-a67d-7101228fb063');
      headers.append('Content-Type', 'application/json');
      return this.http.get('http://wm-api.com/devices?api-key=8b2f69b4-2de7-473d-a67d-7101228fb063&version=2');
//      return this.http.get('http://wm-api.com/devices?api-key=8b2f69b4-2de7-473d-a67d-7101228fb063&version=2', { headers: headers }).map(res =>  res.json().data);
//      return this.http.get('http://wm-api.com/devices?api-key=8b2f69b4-2de7-473d-a67d-7101228fb063&version=2');
  }
}
