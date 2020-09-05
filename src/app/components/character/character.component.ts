import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  info: any = {};
  loading: boolean = true;

  constructor(
    private router: ActivatedRoute,
    private character: CharacterService) {
      this.router.params.subscribe(params => {
        this.getCharacterId(params['id']);
      });
    }

  getCharacterId(id: number) { 

    setTimeout(() => {
      this.loading = false;
      this.character.getIdCharacter(id).subscribe(character => {
        this.info = character;
        console.log(character);
      });
    }, 1500);

  }



  ngOnInit(): void {
  }

}
