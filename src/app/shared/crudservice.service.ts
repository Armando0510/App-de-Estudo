import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {


  constructor(private http: HttpClient) { }
  public getFilmes() : Observable<any>{
   return this.http.get(`https://swapi.dev/api/films/`);

  }
  
  }
  

