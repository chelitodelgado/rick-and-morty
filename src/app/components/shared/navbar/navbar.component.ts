import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  characters: any[] = [];
  loading: boolean = true;

  constructor( private character: CharacterService) { }

  ngOnInit(): void {
  }

}
