import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }


  viewCharacter( item: any ) {
    let characterId = item.id;
    this.router.navigate( ['character/', characterId] );
  }

  ngOnInit(): void {
  }

}
