import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {
  private apiUrl = 'assets/data/articoli.json'; // Percorso al Json

  constructor(private http: HttpClient) { }

  getArticoli(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Recupera il JSON
  }
}
