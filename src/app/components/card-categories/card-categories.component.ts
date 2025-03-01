import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.css']
})
export class CardCategoriesComponent implements OnInit {
  @Input() valore!: string; // Riceve il valore dal padre
  constructor() { }

  ngOnInit(): void {
  }

}
