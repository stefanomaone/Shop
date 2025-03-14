import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() articolo: any; // Riceve l'articolo dal componente padre
  
  constructor() { }

  ngOnInit(): void {
  }

}
