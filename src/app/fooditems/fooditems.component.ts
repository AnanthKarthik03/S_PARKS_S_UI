import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('page loaded');
    
  }

}