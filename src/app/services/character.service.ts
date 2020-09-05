import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor( private _http: HttpClient) {
    console.log('Service running...');
   }
  
   getQuery( query: string ) {
     const URL_API = `https://rickandmortyapi.com/api/character/${query}`; 
     return this._http.get(URL_API);
   }

   getAllCharacter(page: number) {
    // const all = 'https://rickandmortyapi.com/api/character/';
    // return this._http.get(all);
    return this.getQuery(`?page=${page}`);
   } 
  
   getCharacters( termino: string ) {
    return this.getQuery(`?name=${termino}` );
   }

   getIdCharacter( id: number ) {
     return this.getQuery(`${id}`);
   }

}
