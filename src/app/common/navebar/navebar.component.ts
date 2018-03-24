import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})
export class NavebarComponent implements OnInit {

  constructor(private _router: Router,
    private router: Router,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
  }

  change_page(value) {

    // if (value == 'dashboard')
    //   this._router.navigate(['/dashboard']);
    // else if (value == 'fooditems')
      this._router.navigate([value]);
  }

}
