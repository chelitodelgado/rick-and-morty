import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newCharacters: any[] = [];
  error: boolean;
  messageError: boolean;
  loading: boolean;
  page: number;
  next: number = 0;
  back: number = 1;

  constructor( private character: CharacterService) {
    
    /* setTimeout( () => {
      this.character.getAllCharacter(page).subscribe( (data: any) => {
        this.newCharacters = data.results;
        this.loading = false;
      }, (errorServices ) => {
        this.error = true;
        console.log(errorServices.error.error.message);
        this.messageError = errorServices.error.error.message;
      });
    },1500); */

  }
  
  ngOnInit(): void {
    //this.showCaracters(2);
  }

  showCaracters(page: number = 1){
    this.error = false;
    this.loading = true;

    this.character.getAllCharacter(page).subscribe( (data: any) => {
      this.newCharacters = data.results;
      this.loading = false;
    }, (errorServices ) => {
      this.error = true;
      console.log(errorServices.error.error.message);
      this.messageError = errorServices.error.error.message;
    });
  }

  anterior(){
    this.back --;
    console.log(this.back);
    this.showCaracters(this.next);
  }
  
  siguiente(){
    this.next ++;
    this.loading = false;
    console.log(this.next);
    this.showCaracters(this.next);
  }

}
