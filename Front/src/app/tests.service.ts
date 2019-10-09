import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { test } from './test';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor(private _http: HttpClient) { }

  private _urlDC: string = "http://localhost:8000/api/base_statdcs/";
  private _urlSM: string = "http://localhost:8000/api/base_statsms/";

  getDCstat(): Observable<test[]> {
    return this._http.get<test[]>(this._urlDC)
  }
  getSMstat(): Observable<test[]> {
    return this._http.get<test[]>(this._urlSM)
  }
}
