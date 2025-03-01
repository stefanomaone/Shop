import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo-piano',
  templateUrl: './primo-piano.component.html',
  styleUrls: ['./primo-piano.component.css']
})
export class PrimoPianoComponent implements OnInit {

 
  constructor() { }

   @Input()title!: string;
   @Input()subTitle!:string; // Riceve il valore dal padre
  ngOnInit(): void {
  }
  
}
