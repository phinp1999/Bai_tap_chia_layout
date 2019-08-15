import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap4',
  templateUrl: './baitap4.component.html',
  styleUrls: ['./baitap4.component.scss']
})
export class Baitap4Component implements OnInit {
  card:Array<any>=[];
  constructor() { }

  ngOnInit() {
  }
  DetailObj(card){
    this.card = card;
    console.log(this.card);
  }
}
