import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pavii',
  templateUrl: './pavii.component.html',
  styleUrls: ['./pavii.component.css']
})
export class PaviiComponent implements OnInit {

  titulo = 'Propiedad de pavii';

  @Input() turno: string = 'Turno: TARDE';
  constructor() { }

  ngOnInit() {
  }

}