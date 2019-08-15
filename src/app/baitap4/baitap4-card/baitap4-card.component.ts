import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-baitap4-card',
  templateUrl: './baitap4-card.component.html',
  styleUrls: ['./baitap4-card.component.scss']
})
export class Baitap4CardComponent implements OnInit {
  @Input() card;
  @Output() eventDetail = new EventEmitter();
  status:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  Detail(){
    this.eventDetail.emit(this.card);
  }

  HideDes(){
    this.status = false;
  }

  ShowDes(){
    this.status = true;
  }
}
