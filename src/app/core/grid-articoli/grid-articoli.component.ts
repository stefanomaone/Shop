import { Component, OnInit } from '@angular/core';
import { ArticoliService } from '../../services/articoli.service';  // Importa il servizio

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {
  articoli: any[] = [];

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoliService.getArticoli().subscribe(
      (data) => {
        this.articoli = data; // Assegniamo i dati ricevuti al nostro array di articoli
      },
      (error) => {
        console.error('Errore nel caricamento degli articoli:', error);
      }
    );
  }

  // Funzione per dividere in gruppi di 4 elementi
  getGroupedArticles(): any[] {
    const chunkSize = 4;
    let groups = [];
    for (let i = 0; i < this.articoli.length; i += chunkSize) {
      groups.push(this.articoli.slice(i, i + chunkSize));
    }
    return groups;
  }

   // Funzione per applicare lo sconto
   applyDiscount(): void {
    this.articoli.forEach((articolo) => {
      if (articolo.promo !== null) {  // Verifica se promo non è null lo farà l'ngif
        const discount = articolo.promo / 100;  // Converte la percentuale in decimale
        articolo.prezzo = articolo.prezzo * (1 - discount);  // Applica lo sconto al prezzo
      }
    });
  }
}
