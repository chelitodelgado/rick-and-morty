import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];
  loading: boolean = true;

  constructor( private character: CharacterService) { }

  search( termino: string ){
    setTimeout( () => {
      this.loading = false;
      this.character.getCharacters( termino ).subscribe( (data: any) => {
        console.log(termino);
        console.log(data.results);
        this.characters = data.results;
      });
    },500);
  }

  ngOnInit(): void {
  }

}
