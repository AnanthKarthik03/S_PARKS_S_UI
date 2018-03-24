import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {
  
  blocks: boolean=false;
  radio: boolean=true;
  constructor() { }

  ngOnInit() {
    console.log('page loaded');
    
  }

  veg(){
    this.radio=false
    this.blocks=true
  }
  nonveg(){
    
    this.radio=false
    this.blocks=true
  }
}
