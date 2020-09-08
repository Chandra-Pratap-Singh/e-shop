import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #b0c4de;
  }
  .filled {
    color: green;
  }
  .bad {
    color: #deb0b0;
  }
  .filled.bad {
    color: #ff1e1e;
  }
`]
})
export class RatingsComponent implements OnInit {
  @Input() currentRate:number = 0;
  @Input() readOnly:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
