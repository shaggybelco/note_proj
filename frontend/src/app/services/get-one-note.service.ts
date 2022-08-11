import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetOneNoteService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getOneNote(id: any){
    return this.http.get(`${this.baseUrl}/getone/${id}`, {responseType: 'json'});
  }
}
