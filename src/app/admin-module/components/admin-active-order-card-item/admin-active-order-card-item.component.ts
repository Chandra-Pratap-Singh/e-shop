import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-active-order-card-item',
  templateUrl: './admin-active-order-card-item.component.html',
  styleUrls: ['./admin-active-order-card-item.component.css']
})
export class AdminActiveOrderCardItemComponent implements OnInit {

  @Input('item') item:any;

  constructor() { }

  ngOnInit() {
  }

}
