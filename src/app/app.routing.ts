
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';

export const URL_ROUTES: Routes = [
    
    { path: '', component: HomeComponent },
    { path: 'home:/page', component: HomeComponent },
    { path: 'character/:id', component: CharacterComponent },
    { path: 'characters', component: CharactersComponent},
    { path: '**', component: HomeComponent }

];
