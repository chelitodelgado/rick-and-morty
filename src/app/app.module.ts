
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

// Routes
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { URL_ROUTES } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CharacterComponent } from './components/character/character.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';

// Services
import { CharacterService } from './services/character.service';
import { CharactersComponent } from './components/characters/characters.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadingComponent,
    NavbarComponent,
    CardComponent,
    CharacterComponent,
    PaginationComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( URL_ROUTES, {useHash: true} )
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
